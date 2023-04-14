# `vpcIpv4CidrBlockAssociation` Submodule <a name="`vpcIpv4CidrBlockAssociation` Submodule" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpv4CidrBlockAssociation <a name="VpcIpv4CidrBlockAssociation" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association aws_vpc_ipv4_cidr_block_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

vpcipv4cidrblockassociation.NewVpcIpv4CidrBlockAssociation(scope Construct, id *string, config VpcIpv4CidrBlockAssociationConfig) VpcIpv4CidrBlockAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig">VpcIpv4CidrBlockAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig">VpcIpv4CidrBlockAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetIpv4IpamPoolId">ResetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetIpv4NetmaskLength">ResetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.putTimeouts"></a>

```go
func PutTimeouts(value VpcIpv4CidrBlockAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts">VpcIpv4CidrBlockAssociationTimeouts</a>

---

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv4IpamPoolId` <a name="ResetIpv4IpamPoolId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetIpv4IpamPoolId"></a>

```go
func ResetIpv4IpamPoolId()
```

##### `ResetIpv4NetmaskLength` <a name="ResetIpv4NetmaskLength" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetIpv4NetmaskLength"></a>

```go
func ResetIpv4NetmaskLength()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

vpcipv4cidrblockassociation.VpcIpv4CidrBlockAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

vpcipv4cidrblockassociation.VpcIpv4CidrBlockAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

vpcipv4cidrblockassociation.VpcIpv4CidrBlockAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference">VpcIpv4CidrBlockAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4NetmaskLengthInput">Ipv4NetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.timeouts"></a>

```go
func Timeouts() VpcIpv4CidrBlockAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference">VpcIpv4CidrBlockAssociationTimeoutsOutputReference</a>

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4IpamPoolIdInput"></a>

```go
func Ipv4IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv4NetmaskLengthInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4NetmaskLengthInput"></a>

```go
func Ipv4NetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4IpamPoolId"></a>

```go
func Ipv4IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLength`<sup>Required</sup> <a name="Ipv4NetmaskLength" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.ipv4NetmaskLength"></a>

```go
func Ipv4NetmaskLength() *f64
```

- *Type:* *f64

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpv4CidrBlockAssociationConfig <a name="VpcIpv4CidrBlockAssociationConfig" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

&vpcipv4cidrblockassociation.VpcIpv4CidrBlockAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VpcId: *string,
	CidrBlock: *string,
	Id: *string,
	Ipv4IpamPoolId: *string,
	Ipv4NetmaskLength: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#vpc_id VpcIpv4CidrBlockAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#cidr_block VpcIpv4CidrBlockAssociation#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#id VpcIpv4CidrBlockAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#ipv4_ipam_pool_id VpcIpv4CidrBlockAssociation#ipv4_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#ipv4_netmask_length VpcIpv4CidrBlockAssociation#ipv4_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts">VpcIpv4CidrBlockAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#vpc_id VpcIpv4CidrBlockAssociation#vpc_id}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#cidr_block VpcIpv4CidrBlockAssociation#cidr_block}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#id VpcIpv4CidrBlockAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4IpamPoolId`<sup>Optional</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.ipv4IpamPoolId"></a>

```go
Ipv4IpamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#ipv4_ipam_pool_id VpcIpv4CidrBlockAssociation#ipv4_ipam_pool_id}.

---

##### `Ipv4NetmaskLength`<sup>Optional</sup> <a name="Ipv4NetmaskLength" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.ipv4NetmaskLength"></a>

```go
Ipv4NetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#ipv4_netmask_length VpcIpv4CidrBlockAssociation#ipv4_netmask_length}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationConfig.property.timeouts"></a>

```go
Timeouts VpcIpv4CidrBlockAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts">VpcIpv4CidrBlockAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#timeouts VpcIpv4CidrBlockAssociation#timeouts}

---

### VpcIpv4CidrBlockAssociationTimeouts <a name="VpcIpv4CidrBlockAssociationTimeouts" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

&vpcipv4cidrblockassociation.VpcIpv4CidrBlockAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#create VpcIpv4CidrBlockAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#delete VpcIpv4CidrBlockAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#create VpcIpv4CidrBlockAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#delete VpcIpv4CidrBlockAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpv4CidrBlockAssociationTimeoutsOutputReference <a name="VpcIpv4CidrBlockAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipv4cidrblockassociation"

vpcipv4cidrblockassociation.NewVpcIpv4CidrBlockAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcIpv4CidrBlockAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpv4CidrBlockAssociation.VpcIpv4CidrBlockAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



