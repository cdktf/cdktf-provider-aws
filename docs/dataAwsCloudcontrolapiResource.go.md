# `dataAwsCloudcontrolapiResource` Submodule <a name="`dataAwsCloudcontrolapiResource` Submodule" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudcontrolapiResource <a name="DataAwsCloudcontrolapiResource" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource aws_cloudcontrolapi_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudcontrolapiresource"

dataawscloudcontrolapiresource.NewDataAwsCloudcontrolapiResource(scope Construct, id *string, config DataAwsCloudcontrolapiResourceConfig) DataAwsCloudcontrolapiResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig">DataAwsCloudcontrolapiResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig">DataAwsCloudcontrolapiResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetTypeVersionId">ResetTypeVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetId"></a>

```go
func ResetId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTypeVersionId` <a name="ResetTypeVersionId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetTypeVersionId"></a>

```go
func ResetTypeVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudcontrolapiresource"

dataawscloudcontrolapiresource.DataAwsCloudcontrolapiResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudcontrolapiresource"

dataawscloudcontrolapiresource.DataAwsCloudcontrolapiResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudcontrolapiresource"

dataawscloudcontrolapiresource.DataAwsCloudcontrolapiResource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.properties">Properties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionIdInput">TypeVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionId">TypeVersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.properties"></a>

```go
func Properties() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypeVersionIdInput`<sup>Optional</sup> <a name="TypeVersionIdInput" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionIdInput"></a>

```go
func TypeVersionIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypeVersionId`<sup>Required</sup> <a name="TypeVersionId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionId"></a>

```go
func TypeVersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudcontrolapiResourceConfig <a name="DataAwsCloudcontrolapiResourceConfig" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudcontrolapiresource"

&dataawscloudcontrolapiresource.DataAwsCloudcontrolapiResourceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Identifier: *string,
	TypeName: *string,
	Id: *string,
	RoleArn: *string,
	TypeVersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeVersionId">TypeVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}.

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}.

---

##### `TypeVersionId`<sup>Optional</sup> <a name="TypeVersionId" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeVersionId"></a>

```go
TypeVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}.

---



