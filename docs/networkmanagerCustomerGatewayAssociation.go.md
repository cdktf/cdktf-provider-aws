# `networkmanagerCustomerGatewayAssociation` Submodule <a name="`networkmanagerCustomerGatewayAssociation` Submodule" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCustomerGatewayAssociation <a name="NetworkmanagerCustomerGatewayAssociation" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association aws_networkmanager_customer_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

networkmanagercustomergatewayassociation.NewNetworkmanagerCustomerGatewayAssociation(scope Construct, id *string, config NetworkmanagerCustomerGatewayAssociationConfig) NetworkmanagerCustomerGatewayAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig">NetworkmanagerCustomerGatewayAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig">NetworkmanagerCustomerGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId">ResetLinkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkmanagerCustomerGatewayAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetLinkId` <a name="ResetLinkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId"></a>

```go
func ResetLinkId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

networkmanagercustomergatewayassociation.NetworkmanagerCustomerGatewayAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

networkmanagercustomergatewayassociation.NetworkmanagerCustomerGatewayAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

networkmanagercustomergatewayassociation.NetworkmanagerCustomerGatewayAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput">CustomerGatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput">GlobalNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput">LinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn">CustomerGatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts"></a>

```go
func Timeouts() NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a>

---

##### `CustomerGatewayArnInput`<sup>Optional</sup> <a name="CustomerGatewayArnInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput"></a>

```go
func CustomerGatewayArnInput() *string
```

- *Type:* *string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `GlobalNetworkIdInput`<sup>Optional</sup> <a name="GlobalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput"></a>

```go
func GlobalNetworkIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput"></a>

```go
func LinkIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerGatewayArn`<sup>Required</sup> <a name="CustomerGatewayArn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn"></a>

```go
func CustomerGatewayArn() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId"></a>

```go
func GlobalNetworkId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCustomerGatewayAssociationConfig <a name="NetworkmanagerCustomerGatewayAssociationConfig" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

&networkmanagercustomergatewayassociation.NetworkmanagerCustomerGatewayAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomerGatewayArn: *string,
	DeviceId: *string,
	GlobalNetworkId: *string,
	Id: *string,
	LinkId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn">CustomerGatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId">DeviceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId">LinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerGatewayArn`<sup>Required</sup> <a name="CustomerGatewayArn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn"></a>

```go
CustomerGatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}.

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}.

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId"></a>

```go
GlobalNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkId`<sup>Optional</sup> <a name="LinkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId"></a>

```go
LinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts"></a>

```go
Timeouts NetworkmanagerCustomerGatewayAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#timeouts NetworkmanagerCustomerGatewayAssociation#timeouts}

---

### NetworkmanagerCustomerGatewayAssociationTimeouts <a name="NetworkmanagerCustomerGatewayAssociationTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

&networkmanagercustomergatewayassociation.NetworkmanagerCustomerGatewayAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference <a name="NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercustomergatewayassociation"

networkmanagercustomergatewayassociation.NewNetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



