# `dataAwsLambdaCodeSigningConfig` Submodule <a name="`dataAwsLambdaCodeSigningConfig` Submodule" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaCodeSigningConfig <a name="DataAwsLambdaCodeSigningConfig" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.NewDataAwsLambdaCodeSigningConfig(scope Construct, id *string, config DataAwsLambdaCodeSigningConfigConfig) DataAwsLambdaCodeSigningConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig">DataAwsLambdaCodeSigningConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig">DataAwsLambdaCodeSigningConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.DataAwsLambdaCodeSigningConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.DataAwsLambdaCodeSigningConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.DataAwsLambdaCodeSigningConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers">AllowedPublishers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedPublishers`<sup>Required</sup> <a name="AllowedPublishers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers"></a>

```go
func AllowedPublishers() DataAwsLambdaCodeSigningConfigAllowedPublishersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a>

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies"></a>

```go
func Policies() DataAwsLambdaCodeSigningConfigPoliciesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishers <a name="DataAwsLambdaCodeSigningConfigAllowedPublishers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

&dataawslambdacodesigningconfig.DataAwsLambdaCodeSigningConfigAllowedPublishers {

}
```


### DataAwsLambdaCodeSigningConfigConfig <a name="DataAwsLambdaCodeSigningConfigConfig" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

&dataawslambdacodesigningconfig.DataAwsLambdaCodeSigningConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLambdaCodeSigningConfigPolicies <a name="DataAwsLambdaCodeSigningConfigPolicies" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

&dataawslambdacodesigningconfig.DataAwsLambdaCodeSigningConfigPolicies {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishersList <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersList" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.NewDataAwsLambdaCodeSigningConfigAllowedPublishersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdaCodeSigningConfigAllowedPublishersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get"></a>

```go
func Get(index *f64) DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.NewDataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">SigningProfileVersionArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SigningProfileVersionArns`<sup>Required</sup> <a name="SigningProfileVersionArns" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```go
func SigningProfileVersionArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdaCodeSigningConfigAllowedPublishers
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a>

---


### DataAwsLambdaCodeSigningConfigPoliciesList <a name="DataAwsLambdaCodeSigningConfigPoliciesList" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.NewDataAwsLambdaCodeSigningConfigPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdaCodeSigningConfigPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get"></a>

```go
func Get(index *f64) DataAwsLambdaCodeSigningConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdaCodeSigningConfigPoliciesOutputReference <a name="DataAwsLambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdacodesigningconfig"

dataawslambdacodesigningconfig.NewDataAwsLambdaCodeSigningConfigPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdaCodeSigningConfigPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">UntrustedArtifactOnDeployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UntrustedArtifactOnDeployment`<sup>Required</sup> <a name="UntrustedArtifactOnDeployment" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```go
func UntrustedArtifactOnDeployment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdaCodeSigningConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a>

---



