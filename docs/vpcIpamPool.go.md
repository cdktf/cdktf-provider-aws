# `vpcIpamPool` Submodule <a name="`vpcIpamPool` Submodule" id="@cdktf/provider-aws.vpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPool <a name="VpcIpamPool" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

vpcipampool.NewVpcIpamPool(scope Construct, id *string, config VpcIpamPoolConfig) VpcIpamPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength">ResetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength">ResetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength">ResetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags">ResetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport">ResetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService">ResetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource">ResetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable">ResetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId">ResetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts"></a>

```go
func PutTimeouts(value VpcIpamPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

---

##### `ResetAllocationDefaultNetmaskLength` <a name="ResetAllocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength"></a>

```go
func ResetAllocationDefaultNetmaskLength()
```

##### `ResetAllocationMaxNetmaskLength` <a name="ResetAllocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength"></a>

```go
func ResetAllocationMaxNetmaskLength()
```

##### `ResetAllocationMinNetmaskLength` <a name="ResetAllocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength"></a>

```go
func ResetAllocationMinNetmaskLength()
```

##### `ResetAllocationResourceTags` <a name="ResetAllocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags"></a>

```go
func ResetAllocationResourceTags()
```

##### `ResetAutoImport` <a name="ResetAutoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport"></a>

```go
func ResetAutoImport()
```

##### `ResetAwsService` <a name="ResetAwsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService"></a>

```go
func ResetAwsService()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId"></a>

```go
func ResetId()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale"></a>

```go
func ResetLocale()
```

##### `ResetPublicIpSource` <a name="ResetPublicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource"></a>

```go
func ResetPublicIpSource()
```

##### `ResetPubliclyAdvertisable` <a name="ResetPubliclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable"></a>

```go
func ResetPubliclyAdvertisable()
```

##### `ResetSourceIpamPoolId` <a name="ResetSourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId"></a>

```go
func ResetSourceIpamPoolId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

vpcipampool.VpcIpamPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

vpcipampool.VpcIpamPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

vpcipampool.VpcIpamPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType">IpamScopeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth">PoolDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput">AllocationDefaultNetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput">AllocationMaxNetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput">AllocationMinNetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput">AllocationResourceTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput">AutoImportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput">AwsServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput">IpamScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput">PublicIpSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput">PubliclyAdvertisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput">SourceIpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport">AutoImport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService">AwsService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId">IpamScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource">PublicIpSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IpamScopeType`<sup>Required</sup> <a name="IpamScopeType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType"></a>

```go
func IpamScopeType() *string
```

- *Type:* *string

---

##### `PoolDepth`<sup>Required</sup> <a name="PoolDepth" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth"></a>

```go
func PoolDepth() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts"></a>

```go
func Timeouts() VpcIpamPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a>

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AllocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationDefaultNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```go
func AllocationDefaultNetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `AllocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationMaxNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput"></a>

```go
func AllocationMaxNetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `AllocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationMinNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput"></a>

```go
func AllocationMinNetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `AllocationResourceTagsInput`<sup>Optional</sup> <a name="AllocationResourceTagsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput"></a>

```go
func AllocationResourceTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoImportInput`<sup>Optional</sup> <a name="AutoImportInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput"></a>

```go
func AutoImportInput() interface{}
```

- *Type:* interface{}

---

##### `AwsServiceInput`<sup>Optional</sup> <a name="AwsServiceInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput"></a>

```go
func AwsServiceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpamScopeIdInput`<sup>Optional</sup> <a name="IpamScopeIdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput"></a>

```go
func IpamScopeIdInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `PublicIpSourceInput`<sup>Optional</sup> <a name="PublicIpSourceInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput"></a>

```go
func PublicIpSourceInput() *string
```

- *Type:* *string

---

##### `PubliclyAdvertisableInput`<sup>Optional</sup> <a name="PubliclyAdvertisableInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput"></a>

```go
func PubliclyAdvertisableInput() interface{}
```

- *Type:* interface{}

---

##### `SourceIpamPoolIdInput`<sup>Optional</sup> <a name="SourceIpamPoolIdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput"></a>

```go
func SourceIpamPoolIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AllocationDefaultNetmaskLength`<sup>Required</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```go
func AllocationDefaultNetmaskLength() *f64
```

- *Type:* *f64

---

##### `AllocationMaxNetmaskLength`<sup>Required</sup> <a name="AllocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength"></a>

```go
func AllocationMaxNetmaskLength() *f64
```

- *Type:* *f64

---

##### `AllocationMinNetmaskLength`<sup>Required</sup> <a name="AllocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength"></a>

```go
func AllocationMinNetmaskLength() *f64
```

- *Type:* *f64

---

##### `AllocationResourceTags`<sup>Required</sup> <a name="AllocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags"></a>

```go
func AllocationResourceTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoImport`<sup>Required</sup> <a name="AutoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport"></a>

```go
func AutoImport() interface{}
```

- *Type:* interface{}

---

##### `AwsService`<sup>Required</sup> <a name="AwsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService"></a>

```go
func AwsService() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId"></a>

```go
func IpamScopeId() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `PublicIpSource`<sup>Required</sup> <a name="PublicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource"></a>

```go
func PublicIpSource() *string
```

- *Type:* *string

---

##### `PubliclyAdvertisable`<sup>Required</sup> <a name="PubliclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable"></a>

```go
func PubliclyAdvertisable() interface{}
```

- *Type:* interface{}

---

##### `SourceIpamPoolId`<sup>Required</sup> <a name="SourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId"></a>

```go
func SourceIpamPoolId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolConfig <a name="VpcIpamPoolConfig" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

&vpcipampool.VpcIpamPoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AddressFamily: *string,
	IpamScopeId: *string,
	AllocationDefaultNetmaskLength: *f64,
	AllocationMaxNetmaskLength: *f64,
	AllocationMinNetmaskLength: *f64,
	AllocationResourceTags: *map[string]*string,
	AutoImport: interface{},
	AwsService: *string,
	Description: *string,
	Id: *string,
	Locale: *string,
	PublicIpSource: *string,
	PubliclyAdvertisable: interface{},
	SourceIpamPoolId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.vpcIpamPool.VpcIpamPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId">IpamScopeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport">AutoImport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService">AwsService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource">PublicIpSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId"></a>

```go
IpamScopeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `AllocationDefaultNetmaskLength`<sup>Optional</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```go
AllocationDefaultNetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `AllocationMaxNetmaskLength`<sup>Optional</sup> <a name="AllocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```go
AllocationMaxNetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `AllocationMinNetmaskLength`<sup>Optional</sup> <a name="AllocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength"></a>

```go
AllocationMinNetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `AllocationResourceTags`<sup>Optional</sup> <a name="AllocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags"></a>

```go
AllocationResourceTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `AutoImport`<sup>Optional</sup> <a name="AutoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport"></a>

```go
AutoImport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `AwsService`<sup>Optional</sup> <a name="AwsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService"></a>

```go
AwsService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `PublicIpSource`<sup>Optional</sup> <a name="PublicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource"></a>

```go
PublicIpSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `PubliclyAdvertisable`<sup>Optional</sup> <a name="PubliclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable"></a>

```go
PubliclyAdvertisable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `SourceIpamPoolId`<sup>Optional</sup> <a name="SourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId"></a>

```go
SourceIpamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts"></a>

```go
Timeouts VpcIpamPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

### VpcIpamPoolTimeouts <a name="VpcIpamPoolTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

&vpcipampool.VpcIpamPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolTimeoutsOutputReference <a name="VpcIpamPoolTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipampool"

vpcipampool.NewVpcIpamPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcIpamPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



