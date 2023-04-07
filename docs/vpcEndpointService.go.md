# `vpcEndpointService` Submodule <a name="`vpcEndpointService` Submodule" id="@cdktf/provider-aws.vpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointService <a name="VpcEndpointService" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service aws_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.NewVpcEndpointService(scope Construct, id *string, config VpcEndpointServiceConfig) VpcEndpointService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig">VpcEndpointServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig">VpcEndpointServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetAllowedPrincipals">ResetAllowedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetGatewayLoadBalancerArns">ResetGatewayLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetNetworkLoadBalancerArns">ResetNetworkLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetPrivateDnsName">ResetPrivateDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetSupportedIpAddressTypes">ResetSupportedIpAddressTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.putTimeouts"></a>

```go
func PutTimeouts(value VpcEndpointServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a>

---

##### `ResetAllowedPrincipals` <a name="ResetAllowedPrincipals" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetAllowedPrincipals"></a>

```go
func ResetAllowedPrincipals()
```

##### `ResetGatewayLoadBalancerArns` <a name="ResetGatewayLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetGatewayLoadBalancerArns"></a>

```go
func ResetGatewayLoadBalancerArns()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkLoadBalancerArns` <a name="ResetNetworkLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetNetworkLoadBalancerArns"></a>

```go
func ResetNetworkLoadBalancerArns()
```

##### `ResetPrivateDnsName` <a name="ResetPrivateDnsName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetPrivateDnsName"></a>

```go
func ResetPrivateDnsName()
```

##### `ResetSupportedIpAddressTypes` <a name="ResetSupportedIpAddressTypes" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetSupportedIpAddressTypes"></a>

```go
func ResetSupportedIpAddressTypes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.VpcEndpointService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.VpcEndpointService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.VpcEndpointService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.baseEndpointDnsNames">BaseEndpointDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.managesVpcEndpoints">ManagesVpcEndpoints</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameConfiguration">PrivateDnsNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList">VpcEndpointServicePrivateDnsNameConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference">VpcEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequiredInput">AcceptanceRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipalsInput">AllowedPrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArnsInput">GatewayLoadBalancerArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArnsInput">NetworkLoadBalancerArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameInput">PrivateDnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypesInput">SupportedIpAddressTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipals">AllowedPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArns">GatewayLoadBalancerArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArns">NetworkLoadBalancerArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsName">PrivateDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypes">SupportedIpAddressTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `BaseEndpointDnsNames`<sup>Required</sup> <a name="BaseEndpointDnsNames" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.baseEndpointDnsNames"></a>

```go
func BaseEndpointDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `ManagesVpcEndpoints`<sup>Required</sup> <a name="ManagesVpcEndpoints" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.managesVpcEndpoints"></a>

```go
func ManagesVpcEndpoints() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivateDnsNameConfiguration`<sup>Required</sup> <a name="PrivateDnsNameConfiguration" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameConfiguration"></a>

```go
func PrivateDnsNameConfiguration() VpcEndpointServicePrivateDnsNameConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList">VpcEndpointServicePrivateDnsNameConfigurationList</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeouts"></a>

```go
func Timeouts() VpcEndpointServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference">VpcEndpointServiceTimeoutsOutputReference</a>

---

##### `AcceptanceRequiredInput`<sup>Optional</sup> <a name="AcceptanceRequiredInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequiredInput"></a>

```go
func AcceptanceRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedPrincipalsInput`<sup>Optional</sup> <a name="AllowedPrincipalsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipalsInput"></a>

```go
func AllowedPrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GatewayLoadBalancerArnsInput`<sup>Optional</sup> <a name="GatewayLoadBalancerArnsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArnsInput"></a>

```go
func GatewayLoadBalancerArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerArnsInput`<sup>Optional</sup> <a name="NetworkLoadBalancerArnsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArnsInput"></a>

```go
func NetworkLoadBalancerArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateDnsNameInput`<sup>Optional</sup> <a name="PrivateDnsNameInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameInput"></a>

```go
func PrivateDnsNameInput() *string
```

- *Type:* *string

---

##### `SupportedIpAddressTypesInput`<sup>Optional</sup> <a name="SupportedIpAddressTypesInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypesInput"></a>

```go
func SupportedIpAddressTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequired"></a>

```go
func AcceptanceRequired() interface{}
```

- *Type:* interface{}

---

##### `AllowedPrincipals`<sup>Required</sup> <a name="AllowedPrincipals" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipals"></a>

```go
func AllowedPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `GatewayLoadBalancerArns`<sup>Required</sup> <a name="GatewayLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArns"></a>

```go
func GatewayLoadBalancerArns() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerArns`<sup>Required</sup> <a name="NetworkLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArns"></a>

```go
func NetworkLoadBalancerArns() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsName"></a>

```go
func PrivateDnsName() *string
```

- *Type:* *string

---

##### `SupportedIpAddressTypes`<sup>Required</sup> <a name="SupportedIpAddressTypes" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypes"></a>

```go
func SupportedIpAddressTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointServiceConfig <a name="VpcEndpointServiceConfig" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

&vpcendpointservice.VpcEndpointServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AcceptanceRequired: interface{},
	AllowedPrincipals: *[]*string,
	GatewayLoadBalancerArns: *[]*string,
	Id: *string,
	NetworkLoadBalancerArns: *[]*string,
	PrivateDnsName: *string,
	SupportedIpAddressTypes: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.vpcEndpointService.VpcEndpointServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#acceptance_required VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.allowedPrincipals">AllowedPrincipals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#allowed_principals VpcEndpointService#allowed_principals}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.gatewayLoadBalancerArns">GatewayLoadBalancerArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#id VpcEndpointService#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.networkLoadBalancerArns">NetworkLoadBalancerArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.privateDnsName">PrivateDnsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.supportedIpAddressTypes">SupportedIpAddressTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#supported_ip_address_types VpcEndpointService#supported_ip_address_types}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags VpcEndpointService#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.acceptanceRequired"></a>

```go
AcceptanceRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#acceptance_required VpcEndpointService#acceptance_required}.

---

##### `AllowedPrincipals`<sup>Optional</sup> <a name="AllowedPrincipals" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.allowedPrincipals"></a>

```go
AllowedPrincipals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#allowed_principals VpcEndpointService#allowed_principals}.

---

##### `GatewayLoadBalancerArns`<sup>Optional</sup> <a name="GatewayLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.gatewayLoadBalancerArns"></a>

```go
GatewayLoadBalancerArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#id VpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkLoadBalancerArns`<sup>Optional</sup> <a name="NetworkLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.networkLoadBalancerArns"></a>

```go
NetworkLoadBalancerArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}.

---

##### `PrivateDnsName`<sup>Optional</sup> <a name="PrivateDnsName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.privateDnsName"></a>

```go
PrivateDnsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}.

---

##### `SupportedIpAddressTypes`<sup>Optional</sup> <a name="SupportedIpAddressTypes" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.supportedIpAddressTypes"></a>

```go
SupportedIpAddressTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#supported_ip_address_types VpcEndpointService#supported_ip_address_types}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags VpcEndpointService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.timeouts"></a>

```go
Timeouts VpcEndpointServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#timeouts VpcEndpointService#timeouts}

---

### VpcEndpointServicePrivateDnsNameConfiguration <a name="VpcEndpointServicePrivateDnsNameConfiguration" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

&vpcendpointservice.VpcEndpointServicePrivateDnsNameConfiguration {

}
```


### VpcEndpointServiceTimeouts <a name="VpcEndpointServiceTimeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

&vpcendpointservice.VpcEndpointServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#create VpcEndpointService#create}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#delete VpcEndpointService#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#update VpcEndpointService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#create VpcEndpointService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#delete VpcEndpointService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#update VpcEndpointService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEndpointServicePrivateDnsNameConfigurationList <a name="VpcEndpointServicePrivateDnsNameConfigurationList" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.NewVpcEndpointServicePrivateDnsNameConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpcEndpointServicePrivateDnsNameConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.get"></a>

```go
func Get(index *f64) VpcEndpointServicePrivateDnsNameConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VpcEndpointServicePrivateDnsNameConfigurationOutputReference <a name="VpcEndpointServicePrivateDnsNameConfigurationOutputReference" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.NewVpcEndpointServicePrivateDnsNameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpcEndpointServicePrivateDnsNameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration">VpcEndpointServicePrivateDnsNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEndpointServicePrivateDnsNameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration">VpcEndpointServicePrivateDnsNameConfiguration</a>

---


### VpcEndpointServiceTimeoutsOutputReference <a name="VpcEndpointServiceTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointservice"

vpcendpointservice.NewVpcEndpointServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEndpointServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



