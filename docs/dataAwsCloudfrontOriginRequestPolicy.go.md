# `dataAwsCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsCloudfrontOriginRequestPolicy` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontOriginRequestPolicy <a name="DataAwsCloudfrontOriginRequestPolicy" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicy(scope Construct, id *string, config DataAwsCloudfrontOriginRequestPolicyConfig) DataAwsCloudfrontOriginRequestPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig">DataAwsCloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig">DataAwsCloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cookiesConfig"></a>

```go
func CookiesConfig() DataAwsCloudfrontOriginRequestPolicyCookiesConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.headersConfig"></a>

```go
func HeadersConfig() DataAwsCloudfrontOriginRequestPolicyHeadersConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigList</a>

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.queryStringsConfig"></a>

```go
func QueryStringsConfig() DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontOriginRequestPolicyConfig <a name="DataAwsCloudfrontOriginRequestPolicyConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}.

---

### DataAwsCloudfrontOriginRequestPolicyCookiesConfig <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig {

}
```


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies {

}
```


### DataAwsCloudfrontOriginRequestPolicyHeadersConfig <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig {

}
```


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders {

}
```


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig {

}
```


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

&dataawscloudfrontoriginrequestpolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigList <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyCookiesConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontOriginRequestPolicyCookiesConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior">CookieBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig">DataAwsCloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior"></a>

```go
func CookieBehavior() *string
```

- *Type:* *string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies"></a>

```go
func Cookies() DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontOriginRequestPolicyCookiesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig">DataAwsCloudfrontOriginRequestPolicyCookiesConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigList <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyHeadersConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontOriginRequestPolicyHeadersConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior">HeaderBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig">DataAwsCloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderBehavior`<sup>Required</sup> <a name="HeaderBehavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior"></a>

```go
func HeaderBehavior() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers"></a>

```go
func Headers() DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontOriginRequestPolicyHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig">DataAwsCloudfrontOriginRequestPolicyHeadersConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings">QueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```go
func QueryStringBehavior() *string
```

- *Type:* *string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings"></a>

```go
func QueryStrings() DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudfrontoriginrequestpolicy"

dataawscloudfrontoriginrequestpolicy.NewDataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---



