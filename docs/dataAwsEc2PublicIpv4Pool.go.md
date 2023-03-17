# `dataAwsEc2PublicIpv4Pool` Submodule <a name="`dataAwsEc2PublicIpv4Pool` Submodule" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pool <a name="DataAwsEc2PublicIpv4Pool" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

dataawsec2publicipv4pool.NewDataAwsEc2PublicIpv4Pool(scope Construct, id *string, config DataAwsEc2PublicIpv4PoolConfig) DataAwsEc2PublicIpv4Pool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig">DataAwsEc2PublicIpv4PoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig">DataAwsEc2PublicIpv4PoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

dataawsec2publicipv4pool.DataAwsEc2PublicIpv4Pool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

dataawsec2publicipv4pool.DataAwsEc2PublicIpv4Pool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

dataawsec2publicipv4pool.DataAwsEc2PublicIpv4Pool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup">NetworkBorderGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges">PoolAddressRanges</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount">TotalAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount">TotalAvailableAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `NetworkBorderGroup`<sup>Required</sup> <a name="NetworkBorderGroup" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup"></a>

```go
func NetworkBorderGroup() *string
```

- *Type:* *string

---

##### `PoolAddressRanges`<sup>Required</sup> <a name="PoolAddressRanges" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges"></a>

```go
func PoolAddressRanges() DataAwsEc2PublicIpv4PoolPoolAddressRangesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a>

---

##### `TotalAddressCount`<sup>Required</sup> <a name="TotalAddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount"></a>

```go
func TotalAddressCount() *f64
```

- *Type:* *f64

---

##### `TotalAvailableAddressCount`<sup>Required</sup> <a name="TotalAvailableAddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount"></a>

```go
func TotalAvailableAddressCount() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolConfig <a name="DataAwsEc2PublicIpv4PoolConfig" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

&dataawsec2publicipv4pool.DataAwsEc2PublicIpv4PoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PoolId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId">PoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}.

---

### DataAwsEc2PublicIpv4PoolPoolAddressRanges <a name="DataAwsEc2PublicIpv4PoolPoolAddressRanges" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

&dataawsec2publicipv4pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolPoolAddressRangesList <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesList" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

dataawsec2publicipv4pool.NewDataAwsEc2PublicIpv4PoolPoolAddressRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2PublicIpv4PoolPoolAddressRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get"></a>

```go
func Get(index *f64) DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2publicipv4pool"

dataawsec2publicipv4pool.NewDataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount">AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount">AvailableAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress">FirstAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress">LastAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressCount`<sup>Required</sup> <a name="AddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount"></a>

```go
func AddressCount() *f64
```

- *Type:* *f64

---

##### `AvailableAddressCount`<sup>Required</sup> <a name="AvailableAddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount"></a>

```go
func AvailableAddressCount() *f64
```

- *Type:* *f64

---

##### `FirstAddress`<sup>Required</sup> <a name="FirstAddress" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress"></a>

```go
func FirstAddress() *string
```

- *Type:* *string

---

##### `LastAddress`<sup>Required</sup> <a name="LastAddress" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress"></a>

```go
func LastAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsEc2PublicIpv4PoolPoolAddressRanges
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a>

---



