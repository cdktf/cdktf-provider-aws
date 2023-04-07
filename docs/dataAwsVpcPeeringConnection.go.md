# `dataAwsVpcPeeringConnection` Submodule <a name="`dataAwsVpcPeeringConnection` Submodule" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcPeeringConnection <a name="DataAwsVpcPeeringConnection" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection aws_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnection(scope Construct, id *string, config DataAwsVpcPeeringConnectionConfig) DataAwsVpcPeeringConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig">DataAwsVpcPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig">DataAwsVpcPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOwnerId">ResetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerCidrBlock">ResetPeerCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerOwnerId">ResetPeerOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerRegion">ResetPeerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerVpcId">ResetPeerVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsVpcPeeringConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts">DataAwsVpcPeeringConnectionTimeouts</a>

---

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetOwnerId` <a name="ResetOwnerId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOwnerId"></a>

```go
func ResetOwnerId()
```

##### `ResetPeerCidrBlock` <a name="ResetPeerCidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerCidrBlock"></a>

```go
func ResetPeerCidrBlock()
```

##### `ResetPeerOwnerId` <a name="ResetPeerOwnerId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerOwnerId"></a>

```go
func ResetPeerOwnerId()
```

##### `ResetPeerRegion` <a name="ResetPeerRegion" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerRegion"></a>

```go
func ResetPeerRegion()
```

##### `ResetPeerVpcId` <a name="ResetPeerVpcId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerVpcId"></a>

```go
func ResetPeerVpcId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.DataAwsVpcPeeringConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.DataAwsVpcPeeringConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.DataAwsVpcPeeringConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.accepter">Accepter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockSet">CidrBlockSet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList">DataAwsVpcPeeringConnectionCidrBlockSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList">DataAwsVpcPeeringConnectionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockSet">PeerCidrBlockSet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList">DataAwsVpcPeeringConnectionPeerCidrBlockSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.requester">Requester</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference">DataAwsVpcPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerIdInput">OwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockInput">PeerCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerIdInput">PeerOwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegionInput">PeerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcIdInput">PeerVpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlock">PeerCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerId">PeerOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcId">PeerVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Accepter`<sup>Required</sup> <a name="Accepter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.accepter"></a>

```go
func Accepter() BooleanMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap

---

##### `CidrBlockSet`<sup>Required</sup> <a name="CidrBlockSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockSet"></a>

```go
func CidrBlockSet() DataAwsVpcPeeringConnectionCidrBlockSetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList">DataAwsVpcPeeringConnectionCidrBlockSetList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filter"></a>

```go
func Filter() DataAwsVpcPeeringConnectionFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList">DataAwsVpcPeeringConnectionFilterList</a>

---

##### `PeerCidrBlockSet`<sup>Required</sup> <a name="PeerCidrBlockSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockSet"></a>

```go
func PeerCidrBlockSet() DataAwsVpcPeeringConnectionPeerCidrBlockSetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList">DataAwsVpcPeeringConnectionPeerCidrBlockSetList</a>

---

##### `Requester`<sup>Required</sup> <a name="Requester" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.requester"></a>

```go
func Requester() BooleanMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.timeouts"></a>

```go
func Timeouts() DataAwsVpcPeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference">DataAwsVpcPeeringConnectionTimeoutsOutputReference</a>

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerIdInput"></a>

```go
func OwnerIdInput() *string
```

- *Type:* *string

---

##### `PeerCidrBlockInput`<sup>Optional</sup> <a name="PeerCidrBlockInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockInput"></a>

```go
func PeerCidrBlockInput() *string
```

- *Type:* *string

---

##### `PeerOwnerIdInput`<sup>Optional</sup> <a name="PeerOwnerIdInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerIdInput"></a>

```go
func PeerOwnerIdInput() *string
```

- *Type:* *string

---

##### `PeerRegionInput`<sup>Optional</sup> <a name="PeerRegionInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegionInput"></a>

```go
func PeerRegionInput() *string
```

- *Type:* *string

---

##### `PeerVpcIdInput`<sup>Optional</sup> <a name="PeerVpcIdInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcIdInput"></a>

```go
func PeerVpcIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PeerCidrBlock`<sup>Required</sup> <a name="PeerCidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlock"></a>

```go
func PeerCidrBlock() *string
```

- *Type:* *string

---

##### `PeerOwnerId`<sup>Required</sup> <a name="PeerOwnerId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerId"></a>

```go
func PeerOwnerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcId"></a>

```go
func PeerVpcId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcPeeringConnectionCidrBlockSet <a name="DataAwsVpcPeeringConnectionCidrBlockSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

&dataawsvpcpeeringconnection.DataAwsVpcPeeringConnectionCidrBlockSet {

}
```


### DataAwsVpcPeeringConnectionConfig <a name="DataAwsVpcPeeringConnectionConfig" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

&dataawsvpcpeeringconnection.DataAwsVpcPeeringConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CidrBlock: *string,
	Filter: interface{},
	Id: *string,
	OwnerId: *string,
	PeerCidrBlock: *string,
	PeerOwnerId: *string,
	PeerRegion: *string,
	PeerVpcId: *string,
	Region: *string,
	Status: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#cidr_block DataAwsVpcPeeringConnection#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#id DataAwsVpcPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.ownerId">OwnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#owner_id DataAwsVpcPeeringConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerCidrBlock">PeerCidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerOwnerId">PeerOwnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_region DataAwsVpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerVpcId">PeerVpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#region DataAwsVpcPeeringConnection#region}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#status DataAwsVpcPeeringConnection#status}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#tags DataAwsVpcPeeringConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts">DataAwsVpcPeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#vpc_id DataAwsVpcPeeringConnection#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#cidr_block DataAwsVpcPeeringConnection#cidr_block}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#filter DataAwsVpcPeeringConnection#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#id DataAwsVpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnerId`<sup>Optional</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.ownerId"></a>

```go
OwnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#owner_id DataAwsVpcPeeringConnection#owner_id}.

---

##### `PeerCidrBlock`<sup>Optional</sup> <a name="PeerCidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerCidrBlock"></a>

```go
PeerCidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}.

---

##### `PeerOwnerId`<sup>Optional</sup> <a name="PeerOwnerId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerOwnerId"></a>

```go
PeerOwnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}.

---

##### `PeerRegion`<sup>Optional</sup> <a name="PeerRegion" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerRegion"></a>

```go
PeerRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_region DataAwsVpcPeeringConnection#peer_region}.

---

##### `PeerVpcId`<sup>Optional</sup> <a name="PeerVpcId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerVpcId"></a>

```go
PeerVpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#region DataAwsVpcPeeringConnection#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#status DataAwsVpcPeeringConnection#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#tags DataAwsVpcPeeringConnection#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.timeouts"></a>

```go
Timeouts DataAwsVpcPeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts">DataAwsVpcPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#timeouts DataAwsVpcPeeringConnection#timeouts}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#vpc_id DataAwsVpcPeeringConnection#vpc_id}.

---

### DataAwsVpcPeeringConnectionFilter <a name="DataAwsVpcPeeringConnectionFilter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

&dataawsvpcpeeringconnection.DataAwsVpcPeeringConnectionFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#name DataAwsVpcPeeringConnection#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#values DataAwsVpcPeeringConnection#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#name DataAwsVpcPeeringConnection#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#values DataAwsVpcPeeringConnection#values}.

---

### DataAwsVpcPeeringConnectionPeerCidrBlockSet <a name="DataAwsVpcPeeringConnectionPeerCidrBlockSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

&dataawsvpcpeeringconnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet {

}
```


### DataAwsVpcPeeringConnectionTimeouts <a name="DataAwsVpcPeeringConnectionTimeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

&dataawsvpcpeeringconnection.DataAwsVpcPeeringConnectionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#read DataAwsVpcPeeringConnection#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection#read DataAwsVpcPeeringConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcPeeringConnectionCidrBlockSetList <a name="DataAwsVpcPeeringConnectionCidrBlockSetList" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionCidrBlockSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcPeeringConnectionCidrBlockSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.get"></a>

```go
func Get(index *f64) DataAwsVpcPeeringConnectionCidrBlockSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpcPeeringConnectionCidrBlockSetOutputReference <a name="DataAwsVpcPeeringConnectionCidrBlockSetOutputReference" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionCidrBlockSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcPeeringConnectionCidrBlockSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet">DataAwsVpcPeeringConnectionCidrBlockSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpcPeeringConnectionCidrBlockSet
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet">DataAwsVpcPeeringConnectionCidrBlockSet</a>

---


### DataAwsVpcPeeringConnectionFilterList <a name="DataAwsVpcPeeringConnectionFilterList" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcPeeringConnectionFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.get"></a>

```go
func Get(index *f64) DataAwsVpcPeeringConnectionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsVpcPeeringConnectionFilterOutputReference <a name="DataAwsVpcPeeringConnectionFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcPeeringConnectionFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsVpcPeeringConnectionPeerCidrBlockSetList <a name="DataAwsVpcPeeringConnectionPeerCidrBlockSetList" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionPeerCidrBlockSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcPeeringConnectionPeerCidrBlockSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.get"></a>

```go
func Get(index *f64) DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference <a name="DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet">DataAwsVpcPeeringConnectionPeerCidrBlockSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpcPeeringConnectionPeerCidrBlockSet
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet">DataAwsVpcPeeringConnectionPeerCidrBlockSet</a>

---


### DataAwsVpcPeeringConnectionTimeoutsOutputReference <a name="DataAwsVpcPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcpeeringconnection"

dataawsvpcpeeringconnection.NewDataAwsVpcPeeringConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsVpcPeeringConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



