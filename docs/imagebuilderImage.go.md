# `imagebuilderImage` Submodule <a name="`imagebuilderImage` Submodule" id="@cdktf/provider-aws.imagebuilderImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImage <a name="ImagebuilderImage" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image aws_imagebuilder_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImage(scope Construct, id *string, config ImagebuilderImageConfig) ImagebuilderImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration">PutImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn">ResetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn">ResetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled">ResetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn">ResetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration">ResetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutImageTestsConfiguration` <a name="PutImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration"></a>

```go
func PutImageTestsConfiguration(value ImagebuilderImageImageTestsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts"></a>

```go
func PutTimeouts(value ImagebuilderImageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---

##### `ResetContainerRecipeArn` <a name="ResetContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn"></a>

```go
func ResetContainerRecipeArn()
```

##### `ResetDistributionConfigurationArn` <a name="ResetDistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn"></a>

```go
func ResetDistributionConfigurationArn()
```

##### `ResetEnhancedImageMetadataEnabled` <a name="ResetEnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled"></a>

```go
func ResetEnhancedImageMetadataEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetId"></a>

```go
func ResetId()
```

##### `ResetImageRecipeArn` <a name="ResetImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn"></a>

```go
func ResetImageRecipeArn()
```

##### `ResetImageTestsConfiguration` <a name="ResetImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration"></a>

```go
func ResetImageTestsConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.ImagebuilderImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.ImagebuilderImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.ImagebuilderImage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated">DateCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources">OutputResources</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput">ContainerRecipeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput">DistributionConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput">EnhancedImageMetadataEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput">ImageRecipeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput">ImageTestsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput">InfrastructureConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated"></a>

```go
func DateCreated() *string
```

- *Type:* *string

---

##### `ImageTestsConfiguration`<sup>Required</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration"></a>

```go
func ImageTestsConfiguration() ImagebuilderImageImageTestsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `OutputResources`<sup>Required</sup> <a name="OutputResources" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources"></a>

```go
func OutputResources() ImagebuilderImageOutputResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts"></a>

```go
func Timeouts() ImagebuilderImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ContainerRecipeArnInput`<sup>Optional</sup> <a name="ContainerRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput"></a>

```go
func ContainerRecipeArnInput() *string
```

- *Type:* *string

---

##### `DistributionConfigurationArnInput`<sup>Optional</sup> <a name="DistributionConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput"></a>

```go
func DistributionConfigurationArnInput() *string
```

- *Type:* *string

---

##### `EnhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput"></a>

```go
func EnhancedImageMetadataEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageRecipeArnInput`<sup>Optional</sup> <a name="ImageRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput"></a>

```go
func ImageRecipeArnInput() *string
```

- *Type:* *string

---

##### `ImageTestsConfigurationInput`<sup>Optional</sup> <a name="ImageTestsConfigurationInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput"></a>

```go
func ImageTestsConfigurationInput() ImagebuilderImageImageTestsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `InfrastructureConfigurationArnInput`<sup>Optional</sup> <a name="InfrastructureConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput"></a>

```go
func InfrastructureConfigurationArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRecipeArn`<sup>Required</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn"></a>

```go
func ContainerRecipeArn() *string
```

- *Type:* *string

---

##### `DistributionConfigurationArn`<sup>Required</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn"></a>

```go
func DistributionConfigurationArn() *string
```

- *Type:* *string

---

##### `EnhancedImageMetadataEnabled`<sup>Required</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled"></a>

```go
func EnhancedImageMetadataEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageRecipeArn`<sup>Required</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn"></a>

```go
func ImageRecipeArn() *string
```

- *Type:* *string

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn"></a>

```go
func InfrastructureConfigurationArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageConfig <a name="ImagebuilderImageConfig" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

&imagebuilderimage.ImagebuilderImageConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InfrastructureConfigurationArn: *string,
	ContainerRecipeArn: *string,
	DistributionConfigurationArn: *string,
	EnhancedImageMetadataEnabled: interface{},
	Id: *string,
	ImageRecipeArn: *string,
	ImageTestsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.imagebuilderImage.ImagebuilderImageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#id ImagebuilderImage#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags ImagebuilderImage#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags_all ImagebuilderImage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn"></a>

```go
InfrastructureConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}.

---

##### `ContainerRecipeArn`<sup>Optional</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn"></a>

```go
ContainerRecipeArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}.

---

##### `DistributionConfigurationArn`<sup>Optional</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn"></a>

```go
DistributionConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}.

---

##### `EnhancedImageMetadataEnabled`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled"></a>

```go
EnhancedImageMetadataEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#id ImagebuilderImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageRecipeArn`<sup>Optional</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn"></a>

```go
ImageRecipeArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}.

---

##### `ImageTestsConfiguration`<sup>Optional</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration"></a>

```go
ImageTestsConfiguration ImagebuilderImageImageTestsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags ImagebuilderImage#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags_all ImagebuilderImage#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts"></a>

```go
Timeouts ImagebuilderImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#timeouts ImagebuilderImage#timeouts}

---

### ImagebuilderImageImageTestsConfiguration <a name="ImagebuilderImageImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

&imagebuilderimage.ImagebuilderImageImageTestsConfiguration {
	ImageTestsEnabled: interface{},
	TimeoutMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}. |

---

##### `ImageTestsEnabled`<sup>Optional</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled"></a>

```go
ImageTestsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}.

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes"></a>

```go
TimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}.

---

### ImagebuilderImageOutputResources <a name="ImagebuilderImageOutputResources" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

&imagebuilderimage.ImagebuilderImageOutputResources {

}
```


### ImagebuilderImageOutputResourcesAmis <a name="ImagebuilderImageOutputResourcesAmis" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

&imagebuilderimage.ImagebuilderImageOutputResourcesAmis {

}
```


### ImagebuilderImageTimeouts <a name="ImagebuilderImageTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

&imagebuilderimage.ImagebuilderImageTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#create ImagebuilderImage#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#create ImagebuilderImage#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageImageTestsConfigurationOutputReference <a name="ImagebuilderImageImageTestsConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImageImageTestsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImageImageTestsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled">ResetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes">ResetTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTestsEnabled` <a name="ResetImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```go
func ResetImageTestsEnabled()
```

##### `ResetTimeoutMinutes` <a name="ResetTimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```go
func ResetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">ImageTestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput">TimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageTestsEnabledInput`<sup>Optional</sup> <a name="ImageTestsEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```go
func ImageTestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutMinutesInput`<sup>Optional</sup> <a name="TimeoutMinutesInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```go
func TimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `ImageTestsEnabled`<sup>Required</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```go
func ImageTestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```go
func TimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderImageImageTestsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---


### ImagebuilderImageOutputResourcesAmisList <a name="ImagebuilderImageOutputResourcesAmisList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImageOutputResourcesAmisList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderImageOutputResourcesAmisList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get"></a>

```go
func Get(index *f64) ImagebuilderImageOutputResourcesAmisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ImagebuilderImageOutputResourcesAmisOutputReference <a name="ImagebuilderImageOutputResourcesAmisOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImageOutputResourcesAmisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderImageOutputResourcesAmisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderImageOutputResourcesAmis
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a>

---


### ImagebuilderImageOutputResourcesList <a name="ImagebuilderImageOutputResourcesList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImageOutputResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderImageOutputResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get"></a>

```go
func Get(index *f64) ImagebuilderImageOutputResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ImagebuilderImageOutputResourcesOutputReference <a name="ImagebuilderImageOutputResourcesOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImageOutputResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderImageOutputResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis">Amis</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis"></a>

```go
func Amis() ImagebuilderImageOutputResourcesAmisList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderImageOutputResources
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a>

---


### ImagebuilderImageTimeoutsOutputReference <a name="ImagebuilderImageTimeoutsOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/imagebuilderimage"

imagebuilderimage.NewImagebuilderImageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



