# `dataAwsEc2LocalGatewayRouteTable` Submodule <a name="`dataAwsEc2LocalGatewayRouteTable` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayRouteTable <a name="DataAwsEc2LocalGatewayRouteTable" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table aws_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.NewDataAwsEc2LocalGatewayRouteTable(scope Construct, id *string, config DataAwsEc2LocalGatewayRouteTableConfig) DataAwsEc2LocalGatewayRouteTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig">DataAwsEc2LocalGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig">DataAwsEc2LocalGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId">ResetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId">ResetLocalGatewayRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsEc2LocalGatewayRouteTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalGatewayId` <a name="ResetLocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId"></a>

```go
func ResetLocalGatewayId()
```

##### `ResetLocalGatewayRouteTableId` <a name="ResetLocalGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId"></a>

```go
func ResetLocalGatewayRouteTableId()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn"></a>

```go
func ResetOutpostArn()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.DataAwsEc2LocalGatewayRouteTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.DataAwsEc2LocalGatewayRouteTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.DataAwsEc2LocalGatewayRouteTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput">LocalGatewayRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput">OutpostArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter"></a>

```go
func Filter() DataAwsEc2LocalGatewayRouteTableFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts"></a>

```go
func Timeouts() DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput"></a>

```go
func LocalGatewayIdInput() *string
```

- *Type:* *string

---

##### `LocalGatewayRouteTableIdInput`<sup>Optional</sup> <a name="LocalGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput"></a>

```go
func LocalGatewayRouteTableIdInput() *string
```

- *Type:* *string

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput"></a>

```go
func OutpostArnInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId"></a>

```go
func LocalGatewayId() *string
```

- *Type:* *string

---

##### `LocalGatewayRouteTableId`<sup>Required</sup> <a name="LocalGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```go
func LocalGatewayRouteTableId() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayRouteTableConfig <a name="DataAwsEc2LocalGatewayRouteTableConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

&dataawsec2localgatewayroutetable.DataAwsEc2LocalGatewayRouteTableConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	LocalGatewayId: *string,
	LocalGatewayRouteTableId: *string,
	OutpostArn: *string,
	State: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#filter DataAwsEc2LocalGatewayRouteTable#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalGatewayId`<sup>Optional</sup> <a name="LocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId"></a>

```go
LocalGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}.

---

##### `LocalGatewayRouteTableId`<sup>Optional</sup> <a name="LocalGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId"></a>

```go
LocalGatewayRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}.

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn"></a>

```go
OutpostArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts"></a>

```go
Timeouts DataAwsEc2LocalGatewayRouteTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#timeouts DataAwsEc2LocalGatewayRouteTable#timeouts}

---

### DataAwsEc2LocalGatewayRouteTableFilter <a name="DataAwsEc2LocalGatewayRouteTableFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

&dataawsec2localgatewayroutetable.DataAwsEc2LocalGatewayRouteTableFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}.

---

### DataAwsEc2LocalGatewayRouteTableTimeouts <a name="DataAwsEc2LocalGatewayRouteTableTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

&dataawsec2localgatewayroutetable.DataAwsEc2LocalGatewayRouteTableTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayRouteTableFilterList <a name="DataAwsEc2LocalGatewayRouteTableFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.NewDataAwsEc2LocalGatewayRouteTableFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2LocalGatewayRouteTableFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get"></a>

```go
func Get(index *f64) DataAwsEc2LocalGatewayRouteTableFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2LocalGatewayRouteTableFilterOutputReference <a name="DataAwsEc2LocalGatewayRouteTableFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.NewDataAwsEc2LocalGatewayRouteTableFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2LocalGatewayRouteTableFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayroutetable"

dataawsec2localgatewayroutetable.NewDataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



