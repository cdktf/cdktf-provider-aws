# `dataAwsSagemakerPrebuiltEcrImage` Submodule <a name="`dataAwsSagemakerPrebuiltEcrImage` Submodule" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerPrebuiltEcrImage <a name="DataAwsSagemakerPrebuiltEcrImage" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image aws_sagemaker_prebuilt_ecr_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssagemakerprebuiltecrimage"

dataawssagemakerprebuiltecrimage.NewDataAwsSagemakerPrebuiltEcrImage(scope Construct, id *string, config DataAwsSagemakerPrebuiltEcrImageConfig) DataAwsSagemakerPrebuiltEcrImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig">DataAwsSagemakerPrebuiltEcrImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig">DataAwsSagemakerPrebuiltEcrImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetDnsSuffix">ResetDnsSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetImageTag">ResetImageTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDnsSuffix` <a name="ResetDnsSuffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetDnsSuffix"></a>

```go
func ResetDnsSuffix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetId"></a>

```go
func ResetId()
```

##### `ResetImageTag` <a name="ResetImageTag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetImageTag"></a>

```go
func ResetImageTag()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssagemakerprebuiltecrimage"

dataawssagemakerprebuiltecrimage.DataAwsSagemakerPrebuiltEcrImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssagemakerprebuiltecrimage"

dataawssagemakerprebuiltecrimage.DataAwsSagemakerPrebuiltEcrImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssagemakerprebuiltecrimage"

dataawssagemakerprebuiltecrimage.DataAwsSagemakerPrebuiltEcrImage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryPath">RegistryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffixInput">DnsSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTagInput">ImageTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTag">ImageTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

##### `RegistryPath`<sup>Required</sup> <a name="RegistryPath" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryPath"></a>

```go
func RegistryPath() *string
```

- *Type:* *string

---

##### `DnsSuffixInput`<sup>Optional</sup> <a name="DnsSuffixInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffixInput"></a>

```go
func DnsSuffixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageTagInput`<sup>Optional</sup> <a name="ImageTagInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTagInput"></a>

```go
func ImageTagInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffix"></a>

```go
func DnsSuffix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageTag`<sup>Required</sup> <a name="ImageTag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTag"></a>

```go
func ImageTag() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerPrebuiltEcrImageConfig <a name="DataAwsSagemakerPrebuiltEcrImageConfig" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssagemakerprebuiltecrimage"

&dataawssagemakerprebuiltecrimage.DataAwsSagemakerPrebuiltEcrImageConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RepositoryName: *string,
	DnsSuffix: *string,
	Id: *string,
	ImageTag: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.imageTag">ImageTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}.

---

##### `DnsSuffix`<sup>Optional</sup> <a name="DnsSuffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dnsSuffix"></a>

```go
DnsSuffix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageTag`<sup>Optional</sup> <a name="ImageTag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.imageTag"></a>

```go
ImageTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}.

---



