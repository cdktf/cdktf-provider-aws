# `imagebuilderContainerRecipe` Submodule <a name="`imagebuilderContainerRecipe` Submodule" id="@cdktf/provider-aws.imagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderContainerRecipe <a name="ImagebuilderContainerRecipe" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe aws_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipe(scope Construct, id *string, config ImagebuilderContainerRecipeConfig) ImagebuilderContainerRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent">PutComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration">PutInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository">PutTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData">ResetDockerfileTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri">ResetDockerfileTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration">ResetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetPlatformOverride">ResetPlatformOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutComponent` <a name="PutComponent" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent"></a>

```go
func PutComponent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceConfiguration` <a name="PutInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration"></a>

```go
func PutInstanceConfiguration(value ImagebuilderContainerRecipeInstanceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `PutTargetRepository` <a name="PutTargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository"></a>

```go
func PutTargetRepository(value ImagebuilderContainerRecipeTargetRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDockerfileTemplateData` <a name="ResetDockerfileTemplateData" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData"></a>

```go
func ResetDockerfileTemplateData()
```

##### `ResetDockerfileTemplateUri` <a name="ResetDockerfileTemplateUri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri"></a>

```go
func ResetDockerfileTemplateUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceConfiguration` <a name="ResetInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration"></a>

```go
func ResetInstanceConfiguration()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPlatformOverride` <a name="ResetPlatformOverride" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetPlatformOverride"></a>

```go
func ResetPlatformOverride()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory"></a>

```go
func ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.ImagebuilderContainerRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.ImagebuilderContainerRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.ImagebuilderContainerRecipe_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.component">Component</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList">ImagebuilderContainerRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dateCreated">DateCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.encrypted">Encrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentInput">ComponentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput">ContainerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput">DockerfileTemplateDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput">DockerfileTemplateUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput">InstanceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput">ParentImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverrideInput">PlatformOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput">TargetRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri">DockerfileTemplateUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage">ParentImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverride">PlatformOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.component"></a>

```go
func Component() ImagebuilderContainerRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList">ImagebuilderContainerRecipeComponentList</a>

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dateCreated"></a>

```go
func DateCreated() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InstanceConfiguration`<sup>Required</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```go
func InstanceConfiguration() ImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository"></a>

```go
func TargetRepository() ImagebuilderContainerRecipeTargetRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a>

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentInput"></a>

```go
func ComponentInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput"></a>

```go
func ContainerTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DockerfileTemplateDataInput`<sup>Optional</sup> <a name="DockerfileTemplateDataInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput"></a>

```go
func DockerfileTemplateDataInput() *string
```

- *Type:* *string

---

##### `DockerfileTemplateUriInput`<sup>Optional</sup> <a name="DockerfileTemplateUriInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput"></a>

```go
func DockerfileTemplateUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceConfigurationInput`<sup>Optional</sup> <a name="InstanceConfigurationInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput"></a>

```go
func InstanceConfigurationInput() ImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentImageInput`<sup>Optional</sup> <a name="ParentImageInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput"></a>

```go
func ParentImageInput() *string
```

- *Type:* *string

---

##### `PlatformOverrideInput`<sup>Optional</sup> <a name="PlatformOverrideInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverrideInput"></a>

```go
func PlatformOverrideInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetRepositoryInput`<sup>Optional</sup> <a name="TargetRepositoryInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput"></a>

```go
func TargetRepositoryInput() ImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput"></a>

```go
func WorkingDirectoryInput() *string
```

- *Type:* *string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DockerfileTemplateData`<sup>Required</sup> <a name="DockerfileTemplateData" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```go
func DockerfileTemplateData() *string
```

- *Type:* *string

---

##### `DockerfileTemplateUri`<sup>Required</sup> <a name="DockerfileTemplateUri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri"></a>

```go
func DockerfileTemplateUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage"></a>

```go
func ParentImage() *string
```

- *Type:* *string

---

##### `PlatformOverride`<sup>Required</sup> <a name="PlatformOverride" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverride"></a>

```go
func PlatformOverride() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderContainerRecipeComponent <a name="ImagebuilderContainerRecipeComponent" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeComponent {
	ComponentArn: *string,
	Parameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.componentArn">ComponentArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.componentArn"></a>

```go
ComponentArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parameter ImagebuilderContainerRecipe#parameter}

---

### ImagebuilderContainerRecipeComponentParameter <a name="ImagebuilderContainerRecipeComponentParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeComponentParameter {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}.

---

### ImagebuilderContainerRecipeConfig <a name="ImagebuilderContainerRecipeConfig" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Component: interface{},
	ContainerType: *string,
	Name: *string,
	ParentImage: *string,
	TargetRepository: github.com/cdktf/cdktf-provider-aws-go/aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository,
	Version: *string,
	Description: *string,
	DockerfileTemplateData: *string,
	DockerfileTemplateUri: *string,
	Id: *string,
	InstanceConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration,
	KmsKeyId: *string,
	PlatformOverride: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	WorkingDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.component">Component</a></code> | <code>interface{}</code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType">ContainerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage">ParentImage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | target_repository block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri">DockerfileTemplateUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.platformOverride">PlatformOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#platform_override ImagebuilderContainerRecipe#platform_override}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.component"></a>

```go
Component interface{}
```

- *Type:* interface{}

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component ImagebuilderContainerRecipe#component}

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType"></a>

```go
ContainerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage"></a>

```go
ParentImage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}.

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository"></a>

```go
TargetRepository ImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

target_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}.

---

##### `DockerfileTemplateData`<sup>Optional</sup> <a name="DockerfileTemplateData" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData"></a>

```go
DockerfileTemplateData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}.

---

##### `DockerfileTemplateUri`<sup>Optional</sup> <a name="DockerfileTemplateUri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri"></a>

```go
DockerfileTemplateUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceConfiguration`<sup>Optional</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration"></a>

```go
InstanceConfiguration ImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `PlatformOverride`<sup>Optional</sup> <a name="PlatformOverride" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.platformOverride"></a>

```go
PlatformOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#platform_override ImagebuilderContainerRecipe#platform_override}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}.

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory"></a>

```go
WorkingDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}.

---

### ImagebuilderContainerRecipeInstanceConfiguration <a name="ImagebuilderContainerRecipeInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeInstanceConfiguration {
	BlockDeviceMapping: interface{},
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMapping">BlockDeviceMapping</a></code> | <code>interface{}</code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}. |

---

##### `BlockDeviceMapping`<sup>Optional</sup> <a name="BlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMapping"></a>

```go
BlockDeviceMapping interface{}
```

- *Type:* interface{}

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#block_device_mapping ImagebuilderContainerRecipe#block_device_mapping}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}.

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping {
	DeviceName: *string,
	Ebs: github.com/cdktf/cdktf-provider-aws-go/aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs,
	NoDevice: interface{},
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.virtualName">VirtualName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.ebs"></a>

```go
Ebs ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#ebs ImagebuilderContainerRecipe#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.noDevice"></a>

```go
NoDevice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}.

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs {
	DeleteOnTermination: *string,
	Encrypted: *string,
	Iops: *f64,
	KmsKeyId: *string,
	SnapshotId: *string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.encrypted">Encrypted</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.deleteOnTermination"></a>

```go
DeleteOnTermination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.encrypted"></a>

```go
Encrypted *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}.

---

### ImagebuilderContainerRecipeTargetRepository <a name="ImagebuilderContainerRecipeTargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

&imagebuildercontainerrecipe.ImagebuilderContainerRecipeTargetRepository {
	RepositoryName: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}. |

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderContainerRecipeComponentList <a name="ImagebuilderContainerRecipeComponentList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeComponentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderContainerRecipeComponentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get"></a>

```go
func Get(index *f64) ImagebuilderContainerRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderContainerRecipeComponentOutputReference <a name="ImagebuilderContainerRecipeComponentOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeComponentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderContainerRecipeComponentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resetParameter"></a>

```go
func ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList">ImagebuilderContainerRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArnInput">ComponentArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArn">ComponentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameter"></a>

```go
func Parameter() ImagebuilderContainerRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList">ImagebuilderContainerRecipeComponentParameterList</a>

---

##### `ComponentArnInput`<sup>Optional</sup> <a name="ComponentArnInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArnInput"></a>

```go
func ComponentArnInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArn"></a>

```go
func ComponentArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderContainerRecipeComponentParameterList <a name="ImagebuilderContainerRecipeComponentParameterList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeComponentParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderContainerRecipeComponentParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get"></a>

```go
func Get(index *f64) ImagebuilderContainerRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderContainerRecipeComponentParameterOutputReference <a name="ImagebuilderContainerRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeComponentParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderContainerRecipeComponentParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get"></a>

```go
func Get(index *f64) ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs"></a>

```go
func PutEbs(value ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetEbs"></a>

```go
func ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs"></a>

```go
func Ebs() ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebsInput"></a>

```go
func EbsInput() ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice"></a>

```go
func NoDevice() interface{}
```

- *Type:* interface{}

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeInstanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping">PutBlockDeviceMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMapping">ResetBlockDeviceMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockDeviceMapping` <a name="PutBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping"></a>

```go
func PutBlockDeviceMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBlockDeviceMapping` <a name="ResetBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMapping"></a>

```go
func ResetBlockDeviceMapping()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping">BlockDeviceMapping</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingInput">BlockDeviceMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockDeviceMapping`<sup>Required</sup> <a name="BlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping"></a>

```go
func BlockDeviceMapping() ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a>

---

##### `BlockDeviceMappingInput`<sup>Optional</sup> <a name="BlockDeviceMappingInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingInput"></a>

```go
func BlockDeviceMappingInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---


### ImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="ImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuildercontainerrecipe"

imagebuildercontainerrecipe.NewImagebuilderContainerRecipeTargetRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderContainerRecipeTargetRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---



