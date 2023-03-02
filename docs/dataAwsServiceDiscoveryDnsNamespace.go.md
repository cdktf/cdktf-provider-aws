# `dataAwsServiceDiscoveryDnsNamespace` Submodule <a name="`dataAwsServiceDiscoveryDnsNamespace` Submodule" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServiceDiscoveryDnsNamespace <a name="DataAwsServiceDiscoveryDnsNamespace" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace aws_service_discovery_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicediscoverydnsnamespace"

dataawsservicediscoverydnsnamespace.NewDataAwsServiceDiscoveryDnsNamespace(scope Construct, id *string, config DataAwsServiceDiscoveryDnsNamespaceConfig) DataAwsServiceDiscoveryDnsNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig">DataAwsServiceDiscoveryDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig">DataAwsServiceDiscoveryDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicediscoverydnsnamespace"

dataawsservicediscoverydnsnamespace.DataAwsServiceDiscoveryDnsNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicediscoverydnsnamespace"

dataawsservicediscoverydnsnamespace.DataAwsServiceDiscoveryDnsNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicediscoverydnsnamespace"

dataawsservicediscoverydnsnamespace.DataAwsServiceDiscoveryDnsNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.hostedZone">HostedZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostedZone`<sup>Required</sup> <a name="HostedZone" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.hostedZone"></a>

```go
func HostedZone() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServiceDiscoveryDnsNamespaceConfig <a name="DataAwsServiceDiscoveryDnsNamespaceConfig" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicediscoverydnsnamespace"

&dataawsservicediscoverydnsnamespace.DataAwsServiceDiscoveryDnsNamespaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#name DataAwsServiceDiscoveryDnsNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#type DataAwsServiceDiscoveryDnsNamespace#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#id DataAwsServiceDiscoveryDnsNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#tags DataAwsServiceDiscoveryDnsNamespace#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#name DataAwsServiceDiscoveryDnsNamespace#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#type DataAwsServiceDiscoveryDnsNamespace#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#id DataAwsServiceDiscoveryDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace#tags DataAwsServiceDiscoveryDnsNamespace#tags}.

---



