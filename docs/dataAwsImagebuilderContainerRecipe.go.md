# `dataAwsImagebuilderContainerRecipe` Submodule <a name="`dataAwsImagebuilderContainerRecipe` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderContainerRecipe <a name="DataAwsImagebuilderContainerRecipe" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe aws_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipe(scope Construct, id *string, config DataAwsImagebuilderContainerRecipeConfig) DataAwsImagebuilderContainerRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig">DataAwsImagebuilderContainerRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig">DataAwsImagebuilderContainerRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipe_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.component">Component</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList">DataAwsImagebuilderContainerRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dateCreated">DateCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.encrypted">Encrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList">DataAwsImagebuilderContainerRecipeInstanceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.parentImage">ParentImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList">DataAwsImagebuilderContainerRecipeTargetRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.component"></a>

```go
func Component() DataAwsImagebuilderContainerRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList">DataAwsImagebuilderContainerRecipeComponentList</a>

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dateCreated"></a>

```go
func DateCreated() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DockerfileTemplateData`<sup>Required</sup> <a name="DockerfileTemplateData" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```go
func DockerfileTemplateData() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InstanceConfiguration`<sup>Required</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```go
func InstanceConfiguration() DataAwsImagebuilderContainerRecipeInstanceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList">DataAwsImagebuilderContainerRecipeInstanceConfigurationList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.parentImage"></a>

```go
func ParentImage() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.targetRepository"></a>

```go
func TargetRepository() DataAwsImagebuilderContainerRecipeTargetRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList">DataAwsImagebuilderContainerRecipeTargetRepositoryList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderContainerRecipeComponent <a name="DataAwsImagebuilderContainerRecipeComponent" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeComponent {

}
```


### DataAwsImagebuilderContainerRecipeComponentParameter <a name="DataAwsImagebuilderContainerRecipeComponentParameter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeComponentParameter {

}
```


### DataAwsImagebuilderContainerRecipeConfig <a name="DataAwsImagebuilderContainerRecipeConfig" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}.

---

### DataAwsImagebuilderContainerRecipeInstanceConfiguration <a name="DataAwsImagebuilderContainerRecipeInstanceConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration {

}
```


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping {

}
```


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs {

}
```


### DataAwsImagebuilderContainerRecipeTargetRepository <a name="DataAwsImagebuilderContainerRecipeTargetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

&dataawsimagebuildercontainerrecipe.DataAwsImagebuilderContainerRecipeTargetRepository {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderContainerRecipeComponentList <a name="DataAwsImagebuilderContainerRecipeComponentList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeComponentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderContainerRecipeComponentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderContainerRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderContainerRecipeComponentOutputReference <a name="DataAwsImagebuilderContainerRecipeComponentOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeComponentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderContainerRecipeComponentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.componentArn">ComponentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList">DataAwsImagebuilderContainerRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent">DataAwsImagebuilderContainerRecipeComponent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.componentArn"></a>

```go
func ComponentArn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.parameter"></a>

```go
func Parameter() DataAwsImagebuilderContainerRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList">DataAwsImagebuilderContainerRecipeComponentParameterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderContainerRecipeComponent
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent">DataAwsImagebuilderContainerRecipeComponent</a>

---


### DataAwsImagebuilderContainerRecipeComponentParameterList <a name="DataAwsImagebuilderContainerRecipeComponentParameterList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeComponentParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderContainerRecipeComponentParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderContainerRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderContainerRecipeComponentParameterOutputReference <a name="DataAwsImagebuilderContainerRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeComponentParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderContainerRecipeComponentParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter">DataAwsImagebuilderContainerRecipeComponentParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderContainerRecipeComponentParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter">DataAwsImagebuilderContainerRecipeComponentParameter</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs"></a>

```go
func Ebs() DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList</a>

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeInstanceConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderContainerRecipeInstanceConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping">BlockDeviceMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration">DataAwsImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockDeviceMapping`<sup>Required</sup> <a name="BlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping"></a>

```go
func BlockDeviceMapping() DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration">DataAwsImagebuilderContainerRecipeInstanceConfiguration</a>

---


### DataAwsImagebuilderContainerRecipeTargetRepositoryList <a name="DataAwsImagebuilderContainerRecipeTargetRepositoryList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeTargetRepositoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderContainerRecipeTargetRepositoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuildercontainerrecipe"

dataawsimagebuildercontainerrecipe.NewDataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository">DataAwsImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository">DataAwsImagebuilderContainerRecipeTargetRepository</a>

---



