# `dataAwsEcrAuthorizationToken` Submodule <a name="`dataAwsEcrAuthorizationToken` Submodule" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrAuthorizationToken <a name="DataAwsEcrAuthorizationToken" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token aws_ecr_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsecrauthorizationtoken"

dataawsecrauthorizationtoken.NewDataAwsEcrAuthorizationToken(scope Construct, id *string, config DataAwsEcrAuthorizationTokenConfig) DataAwsEcrAuthorizationToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig">DataAwsEcrAuthorizationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig">DataAwsEcrAuthorizationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegistryId">ResetRegistryId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetId"></a>

```go
func ResetId()
```

##### `ResetRegistryId` <a name="ResetRegistryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegistryId"></a>

```go
func ResetRegistryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsecrauthorizationtoken"

dataawsecrauthorizationtoken.DataAwsEcrAuthorizationToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsecrauthorizationtoken"

dataawsecrauthorizationtoken.DataAwsEcrAuthorizationToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsecrauthorizationtoken"

dataawsecrauthorizationtoken.DataAwsEcrAuthorizationToken_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.authorizationToken">AuthorizationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.proxyEndpoint">ProxyEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryIdInput">RegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuthorizationToken`<sup>Required</sup> <a name="AuthorizationToken" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.authorizationToken"></a>

```go
func AuthorizationToken() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProxyEndpoint`<sup>Required</sup> <a name="ProxyEndpoint" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.proxyEndpoint"></a>

```go
func ProxyEndpoint() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegistryIdInput`<sup>Optional</sup> <a name="RegistryIdInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryIdInput"></a>

```go
func RegistryIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrAuthorizationTokenConfig <a name="DataAwsEcrAuthorizationTokenConfig" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsecrauthorizationtoken"

&dataawsecrauthorizationtoken.DataAwsEcrAuthorizationTokenConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	RegistryId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.registryId">RegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RegistryId`<sup>Optional</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.registryId"></a>

```go
RegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}.

---



