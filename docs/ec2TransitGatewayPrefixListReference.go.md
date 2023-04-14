# `ec2TransitGatewayPrefixListReference` Submodule <a name="`ec2TransitGatewayPrefixListReference` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPrefixListReference <a name="Ec2TransitGatewayPrefixListReference" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference aws_ec2_transit_gateway_prefix_list_reference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewayprefixlistreference"

ec2transitgatewayprefixlistreference.NewEc2TransitGatewayPrefixListReference(scope Construct, id *string, config Ec2TransitGatewayPrefixListReferenceConfig) Ec2TransitGatewayPrefixListReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig">Ec2TransitGatewayPrefixListReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig">Ec2TransitGatewayPrefixListReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole">ResetBlackhole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId">ResetTransitGatewayAttachmentId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBlackhole` <a name="ResetBlackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole"></a>

```go
func ResetBlackhole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTransitGatewayAttachmentId` <a name="ResetTransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId"></a>

```go
func ResetTransitGatewayAttachmentId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewayprefixlistreference"

ec2transitgatewayprefixlistreference.Ec2TransitGatewayPrefixListReference_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewayprefixlistreference"

ec2transitgatewayprefixlistreference.Ec2TransitGatewayPrefixListReference_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewayprefixlistreference"

ec2transitgatewayprefixlistreference.Ec2TransitGatewayPrefixListReference_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId">PrefixListOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput">BlackholeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput">TransitGatewayRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole">Blackhole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId">PrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrefixListOwnerId`<sup>Required</sup> <a name="PrefixListOwnerId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId"></a>

```go
func PrefixListOwnerId() *string
```

- *Type:* *string

---

##### `BlackholeInput`<sup>Optional</sup> <a name="BlackholeInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput"></a>

```go
func BlackholeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput"></a>

```go
func PrefixListIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput"></a>

```go
func TransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput"></a>

```go
func TransitGatewayRouteTableIdInput() *string
```

- *Type:* *string

---

##### `Blackhole`<sup>Required</sup> <a name="Blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole"></a>

```go
func Blackhole() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId"></a>

```go
func PrefixListId() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId"></a>

```go
func TransitGatewayRouteTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPrefixListReferenceConfig <a name="Ec2TransitGatewayPrefixListReferenceConfig" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewayprefixlistreference"

&ec2transitgatewayprefixlistreference.Ec2TransitGatewayPrefixListReferenceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrefixListId: *string,
	TransitGatewayRouteTableId: *string,
	Blackhole: interface{},
	Id: *string,
	TransitGatewayAttachmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId">PrefixListId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole">Blackhole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId"></a>

```go
PrefixListId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}.

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId"></a>

```go
TransitGatewayRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}.

---

##### `Blackhole`<sup>Optional</sup> <a name="Blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole"></a>

```go
Blackhole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId"></a>

```go
TransitGatewayAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}.

---



