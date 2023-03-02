# `dataAwsCodeartifactRepositoryEndpoint` Submodule <a name="`dataAwsCodeartifactRepositoryEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactRepositoryEndpoint <a name="DataAwsCodeartifactRepositoryEndpoint" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodeartifactrepositoryendpoint"

dataawscodeartifactrepositoryendpoint.NewDataAwsCodeartifactRepositoryEndpoint(scope Construct, id *string, config DataAwsCodeartifactRepositoryEndpointConfig) DataAwsCodeartifactRepositoryEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig">DataAwsCodeartifactRepositoryEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig">DataAwsCodeartifactRepositoryEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner"></a>

```go
func ResetDomainOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodeartifactrepositoryendpoint"

dataawscodeartifactrepositoryendpoint.DataAwsCodeartifactRepositoryEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodeartifactrepositoryendpoint"

dataawscodeartifactrepositoryendpoint.DataAwsCodeartifactRepositoryEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodeartifactrepositoryendpoint"

dataawscodeartifactrepositoryendpoint.DataAwsCodeartifactRepositoryEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint">RepositoryEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner">DomainOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RepositoryEndpoint`<sup>Required</sup> <a name="RepositoryEndpoint" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint"></a>

```go
func RepositoryEndpoint() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput"></a>

```go
func DomainOwnerInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner"></a>

```go
func DomainOwner() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactRepositoryEndpointConfig <a name="DataAwsCodeartifactRepositoryEndpointConfig" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodeartifactrepositoryendpoint"

&dataawscodeartifactrepositoryendpoint.DataAwsCodeartifactRepositoryEndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Format: *string,
	Repository: *string,
	DomainOwner: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner">DomainOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner"></a>

```go
DomainOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



