# `ec2TransitGateway` Submodule <a name="`ec2TransitGateway` Submodule" id="@cdktf/provider-aws.ec2TransitGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGateway <a name="Ec2TransitGateway" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway aws_ec2_transit_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

ec2transitgateway.NewEc2TransitGateway(scope Construct, id *string, config Ec2TransitGatewayConfig) Ec2TransitGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig">Ec2TransitGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig">Ec2TransitGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn">ResetAmazonSideAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments">ResetAutoAcceptSharedAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation">ResetDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation">ResetDefaultRouteTablePropagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport">ResetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport">ResetMulticastSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks">ResetTransitGatewayCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport">ResetVpnEcmpSupport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts"></a>

```go
func PutTimeouts(value Ec2TransitGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

---

##### `ResetAmazonSideAsn` <a name="ResetAmazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn"></a>

```go
func ResetAmazonSideAsn()
```

##### `ResetAutoAcceptSharedAttachments` <a name="ResetAutoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments"></a>

```go
func ResetAutoAcceptSharedAttachments()
```

##### `ResetDefaultRouteTableAssociation` <a name="ResetDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation"></a>

```go
func ResetDefaultRouteTableAssociation()
```

##### `ResetDefaultRouteTablePropagation` <a name="ResetDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation"></a>

```go
func ResetDefaultRouteTablePropagation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnsSupport` <a name="ResetDnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport"></a>

```go
func ResetDnsSupport()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetMulticastSupport` <a name="ResetMulticastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport"></a>

```go
func ResetMulticastSupport()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitGatewayCidrBlocks` <a name="ResetTransitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks"></a>

```go
func ResetTransitGatewayCidrBlocks()
```

##### `ResetVpnEcmpSupport` <a name="ResetVpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport"></a>

```go
func ResetVpnEcmpSupport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

ec2transitgateway.Ec2TransitGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

ec2transitgateway.Ec2TransitGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

ec2transitgateway.Ec2TransitGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId">AssociationDefaultRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId">PropagationDefaultRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput">AmazonSideAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput">AutoAcceptSharedAttachmentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput">DefaultRouteTableAssociationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput">DefaultRouteTablePropagationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput">DnsSupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput">MulticastSupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput">TransitGatewayCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput">VpnEcmpSupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments">AutoAcceptSharedAttachments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation">DefaultRouteTableAssociation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation">DefaultRouteTablePropagation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport">DnsSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport">MulticastSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks">TransitGatewayCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport">VpnEcmpSupport</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationDefaultRouteTableId`<sup>Required</sup> <a name="AssociationDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId"></a>

```go
func AssociationDefaultRouteTableId() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PropagationDefaultRouteTableId`<sup>Required</sup> <a name="PropagationDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId"></a>

```go
func PropagationDefaultRouteTableId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts"></a>

```go
func Timeouts() Ec2TransitGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a>

---

##### `AmazonSideAsnInput`<sup>Optional</sup> <a name="AmazonSideAsnInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput"></a>

```go
func AmazonSideAsnInput() *f64
```

- *Type:* *f64

---

##### `AutoAcceptSharedAttachmentsInput`<sup>Optional</sup> <a name="AutoAcceptSharedAttachmentsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput"></a>

```go
func AutoAcceptSharedAttachmentsInput() *string
```

- *Type:* *string

---

##### `DefaultRouteTableAssociationInput`<sup>Optional</sup> <a name="DefaultRouteTableAssociationInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput"></a>

```go
func DefaultRouteTableAssociationInput() *string
```

- *Type:* *string

---

##### `DefaultRouteTablePropagationInput`<sup>Optional</sup> <a name="DefaultRouteTablePropagationInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput"></a>

```go
func DefaultRouteTablePropagationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsSupportInput`<sup>Optional</sup> <a name="DnsSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput"></a>

```go
func DnsSupportInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MulticastSupportInput`<sup>Optional</sup> <a name="MulticastSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput"></a>

```go
func MulticastSupportInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayCidrBlocksInput`<sup>Optional</sup> <a name="TransitGatewayCidrBlocksInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput"></a>

```go
func TransitGatewayCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpnEcmpSupportInput`<sup>Optional</sup> <a name="VpnEcmpSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput"></a>

```go
func VpnEcmpSupportInput() *string
```

- *Type:* *string

---

##### `AmazonSideAsn`<sup>Required</sup> <a name="AmazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn"></a>

```go
func AmazonSideAsn() *f64
```

- *Type:* *f64

---

##### `AutoAcceptSharedAttachments`<sup>Required</sup> <a name="AutoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments"></a>

```go
func AutoAcceptSharedAttachments() *string
```

- *Type:* *string

---

##### `DefaultRouteTableAssociation`<sup>Required</sup> <a name="DefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation"></a>

```go
func DefaultRouteTableAssociation() *string
```

- *Type:* *string

---

##### `DefaultRouteTablePropagation`<sup>Required</sup> <a name="DefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation"></a>

```go
func DefaultRouteTablePropagation() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport"></a>

```go
func DnsSupport() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MulticastSupport`<sup>Required</sup> <a name="MulticastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport"></a>

```go
func MulticastSupport() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransitGatewayCidrBlocks`<sup>Required</sup> <a name="TransitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks"></a>

```go
func TransitGatewayCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `VpnEcmpSupport`<sup>Required</sup> <a name="VpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport"></a>

```go
func VpnEcmpSupport() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConfig <a name="Ec2TransitGatewayConfig" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

&ec2transitgateway.Ec2TransitGatewayConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AmazonSideAsn: *f64,
	AutoAcceptSharedAttachments: *string,
	DefaultRouteTableAssociation: *string,
	DefaultRouteTablePropagation: *string,
	Description: *string,
	DnsSupport: *string,
	Id: *string,
	MulticastSupport: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.ec2TransitGateway.Ec2TransitGatewayTimeouts,
	TransitGatewayCidrBlocks: *[]*string,
	VpnEcmpSupport: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments">AutoAcceptSharedAttachments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation">DefaultRouteTableAssociation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation">DefaultRouteTablePropagation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport">DnsSupport</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport">MulticastSupport</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks">TransitGatewayCidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport">VpnEcmpSupport</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AmazonSideAsn`<sup>Optional</sup> <a name="AmazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn"></a>

```go
AmazonSideAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `AutoAcceptSharedAttachments`<sup>Optional</sup> <a name="AutoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments"></a>

```go
AutoAcceptSharedAttachments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `DefaultRouteTableAssociation`<sup>Optional</sup> <a name="DefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation"></a>

```go
DefaultRouteTableAssociation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `DefaultRouteTablePropagation`<sup>Optional</sup> <a name="DefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation"></a>

```go
DefaultRouteTablePropagation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `DnsSupport`<sup>Optional</sup> <a name="DnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport"></a>

```go
DnsSupport *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MulticastSupport`<sup>Optional</sup> <a name="MulticastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport"></a>

```go
MulticastSupport *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts"></a>

```go
Timeouts Ec2TransitGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}

---

##### `TransitGatewayCidrBlocks`<sup>Optional</sup> <a name="TransitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks"></a>

```go
TransitGatewayCidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `VpnEcmpSupport`<sup>Optional</sup> <a name="VpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport"></a>

```go
VpnEcmpSupport *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

### Ec2TransitGatewayTimeouts <a name="Ec2TransitGatewayTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

&ec2transitgateway.Ec2TransitGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayTimeoutsOutputReference <a name="Ec2TransitGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgateway"

ec2transitgateway.NewEc2TransitGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2TransitGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



