# `apiGatewayDocumentationPart` Submodule <a name="`apiGatewayDocumentationPart` Submodule" id="@cdktf/provider-aws.apiGatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDocumentationPart <a name="ApiGatewayDocumentationPart" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part aws_api_gateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

apigatewaydocumentationpart.NewApiGatewayDocumentationPart(scope Construct, id *string, config ApiGatewayDocumentationPartConfig) ApiGatewayDocumentationPart
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig">ApiGatewayDocumentationPartConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig">ApiGatewayDocumentationPartConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLocation` <a name="PutLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation"></a>

```go
func PutLocation(value ApiGatewayDocumentationPartLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApiGatewayDocumentationPart_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApiGatewayDocumentationPart_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApiGatewayDocumentationPart_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput">LocationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput">PropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties">Properties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location"></a>

```go
func Location() ApiGatewayDocumentationPartLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput"></a>

```go
func LocationInput() ApiGatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput"></a>

```go
func PropertiesInput() *string
```

- *Type:* *string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties"></a>

```go
func Properties() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDocumentationPartConfig <a name="ApiGatewayDocumentationPartConfig" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

&apigatewaydocumentationpart.ApiGatewayDocumentationPartConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: github.com/cdktf/cdktf-provider-aws-go/aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation,
	Properties: *string,
	RestApiId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties">Properties</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location"></a>

```go
Location ApiGatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties"></a>

```go
Properties *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayDocumentationPartLocation <a name="ApiGatewayDocumentationPartLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

&apigatewaydocumentationpart.ApiGatewayDocumentationPartLocation {
	Type: *string,
	Method: *string,
	Name: *string,
	Path: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDocumentationPartLocationOutputReference <a name="ApiGatewayDocumentationPartLocationOutputReference" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaydocumentationpart"

apigatewaydocumentationpart.NewApiGatewayDocumentationPartLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayDocumentationPartLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiGatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---



