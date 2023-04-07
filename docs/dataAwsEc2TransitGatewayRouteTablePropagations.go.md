# `dataAwsEc2TransitGatewayRouteTablePropagations` Submodule <a name="`dataAwsEc2TransitGatewayRouteTablePropagations` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagations <a name="DataAwsEc2TransitGatewayRouteTablePropagations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations aws_ec2_transit_gateway_route_table_propagations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.NewDataAwsEc2TransitGatewayRouteTablePropagations(scope Construct, id *string, config DataAwsEc2TransitGatewayRouteTablePropagationsConfig) DataAwsEc2TransitGatewayRouteTablePropagations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig">DataAwsEc2TransitGatewayRouteTablePropagationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig">DataAwsEc2TransitGatewayRouteTablePropagationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.DataAwsEc2TransitGatewayRouteTablePropagations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.DataAwsEc2TransitGatewayRouteTablePropagations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.DataAwsEc2TransitGatewayRouteTablePropagations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput">TransitGatewayRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter"></a>

```go
func Filter() DataAwsEc2TransitGatewayRouteTablePropagationsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts"></a>

```go
func Timeouts() DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput"></a>

```go
func TransitGatewayRouteTableIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId"></a>

```go
func TransitGatewayRouteTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsConfig <a name="DataAwsEc2TransitGatewayRouteTablePropagationsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

&dataawsec2transitgatewayroutetablepropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TransitGatewayRouteTableId: *string,
	Filter: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId"></a>

```go
TransitGatewayRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts"></a>

```go
Timeouts DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}

---

### DataAwsEc2TransitGatewayRouteTablePropagationsFilter <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

&dataawsec2transitgatewayroutetablepropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}.

---

### DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

&dataawsec2transitgatewayroutetablepropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsFilterList <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.NewDataAwsEc2TransitGatewayRouteTablePropagationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2TransitGatewayRouteTablePropagationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get"></a>

```go
func Get(index *f64) DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.NewDataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayroutetablepropagations"

dataawsec2transitgatewayroutetablepropagations.NewDataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



