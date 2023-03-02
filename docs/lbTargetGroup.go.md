# `lbTargetGroup` Submodule <a name="`lbTargetGroup` Submodule" id="@cdktf/provider-aws.lbTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTargetGroup <a name="LbTargetGroup" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group aws_lb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.NewLbTargetGroup(scope Construct, id *string, config LbTargetGroupConfig) LbTargetGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig">LbTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig">LbTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover">PutTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination">ResetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay">ResetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled">ResetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType">ResetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp">ResetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2">ResetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart">ResetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness">ResetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover">ResetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType">ResetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck"></a>

```go
func PutHealthCheck(value LbTargetGroupHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness"></a>

```go
func PutStickiness(value LbTargetGroupStickiness)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `PutTargetFailover` <a name="PutTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover"></a>

```go
func PutTargetFailover(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnectionTermination` <a name="ResetConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination"></a>

```go
func ResetConnectionTermination()
```

##### `ResetDeregistrationDelay` <a name="ResetDeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay"></a>

```go
func ResetDeregistrationDelay()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetLambdaMultiValueHeadersEnabled` <a name="ResetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```go
func ResetLambdaMultiValueHeadersEnabled()
```

##### `ResetLoadBalancingAlgorithmType` <a name="ResetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```go
func ResetLoadBalancingAlgorithmType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreserveClientIp` <a name="ResetPreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp"></a>

```go
func ResetPreserveClientIp()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion"></a>

```go
func ResetProtocolVersion()
```

##### `ResetProxyProtocolV2` <a name="ResetProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2"></a>

```go
func ResetProxyProtocolV2()
```

##### `ResetSlowStart` <a name="ResetSlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart"></a>

```go
func ResetSlowStart()
```

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness"></a>

```go
func ResetStickiness()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTargetFailover` <a name="ResetTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover"></a>

```go
func ResetTargetFailover()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType"></a>

```go
func ResetTargetType()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.LbTargetGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.LbTargetGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.LbTargetGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix">ArnSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover">TargetFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput">ConnectionTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput">DeregistrationDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">LambdaMultiValueHeadersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput">LoadBalancingAlgorithmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput">PreserveClientIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input">ProxyProtocolV2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput">SlowStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput">TargetFailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination">ConnectionTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay">DeregistrationDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled">LambdaMultiValueHeadersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType">LoadBalancingAlgorithmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp">PreserveClientIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2">ProxyProtocolV2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart">SlowStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ArnSuffix`<sup>Required</sup> <a name="ArnSuffix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix"></a>

```go
func ArnSuffix() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck"></a>

```go
func HealthCheck() LbTargetGroupHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a>

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness"></a>

```go
func Stickiness() LbTargetGroupStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a>

---

##### `TargetFailover`<sup>Required</sup> <a name="TargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover"></a>

```go
func TargetFailover() LbTargetGroupTargetFailoverList
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a>

---

##### `ConnectionTerminationInput`<sup>Optional</sup> <a name="ConnectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput"></a>

```go
func ConnectionTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DeregistrationDelayInput`<sup>Optional</sup> <a name="DeregistrationDelayInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput"></a>

```go
func DeregistrationDelayInput() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput"></a>

```go
func HealthCheckInput() LbTargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `LambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="LambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```go
func LambdaMultiValueHeadersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```go
func LoadBalancingAlgorithmTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreserveClientIpInput`<sup>Optional</sup> <a name="PreserveClientIpInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput"></a>

```go
func PreserveClientIpInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput"></a>

```go
func ProtocolVersionInput() *string
```

- *Type:* *string

---

##### `ProxyProtocolV2Input`<sup>Optional</sup> <a name="ProxyProtocolV2Input" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input"></a>

```go
func ProxyProtocolV2Input() interface{}
```

- *Type:* interface{}

---

##### `SlowStartInput`<sup>Optional</sup> <a name="SlowStartInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput"></a>

```go
func SlowStartInput() *f64
```

- *Type:* *f64

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput"></a>

```go
func StickinessInput() LbTargetGroupStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetFailoverInput`<sup>Optional</sup> <a name="TargetFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput"></a>

```go
func TargetFailoverInput() interface{}
```

- *Type:* interface{}

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `ConnectionTermination`<sup>Required</sup> <a name="ConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination"></a>

```go
func ConnectionTermination() interface{}
```

- *Type:* interface{}

---

##### `DeregistrationDelay`<sup>Required</sup> <a name="DeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay"></a>

```go
func DeregistrationDelay() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `LambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="LambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```go
func LambdaMultiValueHeadersEnabled() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancingAlgorithmType`<sup>Required</sup> <a name="LoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType"></a>

```go
func LoadBalancingAlgorithmType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreserveClientIp`<sup>Required</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp"></a>

```go
func PreserveClientIp() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion"></a>

```go
func ProtocolVersion() *string
```

- *Type:* *string

---

##### `ProxyProtocolV2`<sup>Required</sup> <a name="ProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2"></a>

```go
func ProxyProtocolV2() interface{}
```

- *Type:* interface{}

---

##### `SlowStart`<sup>Required</sup> <a name="SlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart"></a>

```go
func SlowStart() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbTargetGroupConfig <a name="LbTargetGroupConfig" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

&lbtargetgroup.LbTargetGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionTermination: interface{},
	DeregistrationDelay: *string,
	HealthCheck: github.com/cdktf/cdktf-provider-aws-go/aws.lbTargetGroup.LbTargetGroupHealthCheck,
	Id: *string,
	IpAddressType: *string,
	LambdaMultiValueHeadersEnabled: interface{},
	LoadBalancingAlgorithmType: *string,
	Name: *string,
	NamePrefix: *string,
	Port: *f64,
	PreserveClientIp: *string,
	Protocol: *string,
	ProtocolVersion: *string,
	ProxyProtocolV2: interface{},
	SlowStart: *f64,
	Stickiness: github.com/cdktf/cdktf-provider-aws-go/aws.lbTargetGroup.LbTargetGroupStickiness,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TargetFailover: interface{},
	TargetType: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination">ConnectionTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#connection_termination LbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay">DeregistrationDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#id LbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">LambdaMultiValueHeadersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType">LoadBalancingAlgorithmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#name LbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#name_prefix LbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp">PreserveClientIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#protocol_version LbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2">ProxyProtocolV2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart">SlowStart</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#slow_start LbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#tags LbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#tags_all LbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover">TargetFailover</a></code> | <code>interface{}</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType">TargetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#target_type LbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#vpc_id LbTargetGroup#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionTermination`<sup>Optional</sup> <a name="ConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination"></a>

```go
ConnectionTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#connection_termination LbTargetGroup#connection_termination}.

---

##### `DeregistrationDelay`<sup>Optional</sup> <a name="DeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay"></a>

```go
DeregistrationDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck"></a>

```go
HealthCheck LbTargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#health_check LbTargetGroup#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#id LbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}.

---

##### `LambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="LambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```go
LambdaMultiValueHeadersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `LoadBalancingAlgorithmType`<sup>Optional</sup> <a name="LoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```go
LoadBalancingAlgorithmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#name LbTargetGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#name_prefix LbTargetGroup#name_prefix}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#port LbTargetGroup#port}.

---

##### `PreserveClientIp`<sup>Optional</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp"></a>

```go
PreserveClientIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion"></a>

```go
ProtocolVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#protocol_version LbTargetGroup#protocol_version}.

---

##### `ProxyProtocolV2`<sup>Optional</sup> <a name="ProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2"></a>

```go
ProxyProtocolV2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}.

---

##### `SlowStart`<sup>Optional</sup> <a name="SlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart"></a>

```go
SlowStart *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#slow_start LbTargetGroup#slow_start}.

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness"></a>

```go
Stickiness LbTargetGroupStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#stickiness LbTargetGroup#stickiness}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#tags LbTargetGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#tags_all LbTargetGroup#tags_all}.

---

##### `TargetFailover`<sup>Optional</sup> <a name="TargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover"></a>

```go
TargetFailover interface{}
```

- *Type:* interface{}

target_failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#target_failover LbTargetGroup#target_failover}

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#target_type LbTargetGroup#target_type}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#vpc_id LbTargetGroup#vpc_id}.

---

### LbTargetGroupHealthCheck <a name="LbTargetGroupHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

&lbtargetgroup.LbTargetGroupHealthCheck {
	Enabled: interface{},
	HealthyThreshold: *f64,
	Interval: *f64,
	Matcher: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Timeout: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#enabled LbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#interval LbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher">Matcher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#matcher LbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#path LbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#timeout LbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#enabled LbTargetGroup#enabled}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#interval LbTargetGroup#interval}.

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher"></a>

```go
Matcher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#matcher LbTargetGroup#matcher}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#path LbTargetGroup#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#port LbTargetGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#timeout LbTargetGroup#timeout}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}.

---

### LbTargetGroupStickiness <a name="LbTargetGroupStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

&lbtargetgroup.LbTargetGroupStickiness {
	Type: *string,
	CookieDuration: *f64,
	CookieName: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#type LbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration">CookieDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName">CookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#cookie_name LbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#enabled LbTargetGroup#enabled}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#type LbTargetGroup#type}.

---

##### `CookieDuration`<sup>Optional</sup> <a name="CookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration"></a>

```go
CookieDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}.

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName"></a>

```go
CookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#cookie_name LbTargetGroup#cookie_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#enabled LbTargetGroup#enabled}.

---

### LbTargetGroupTargetFailover <a name="LbTargetGroupTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

&lbtargetgroup.LbTargetGroupTargetFailover {
	OnDeregistration: *string,
	OnUnhealthy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration">OnDeregistration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy">OnUnhealthy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}. |

---

##### `OnDeregistration`<sup>Required</sup> <a name="OnDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration"></a>

```go
OnDeregistration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}.

---

##### `OnUnhealthy`<sup>Required</sup> <a name="OnUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy"></a>

```go
OnUnhealthy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTargetGroupHealthCheckOutputReference <a name="LbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.NewLbTargetGroupHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbTargetGroupHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```go
func ResetMatcher()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput">MatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher">Matcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```go
func MatcherInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```go
func Matcher() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() LbTargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---


### LbTargetGroupStickinessOutputReference <a name="LbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.NewLbTargetGroupStickinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbTargetGroupStickinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration">ResetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieDuration` <a name="ResetCookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```go
func ResetCookieDuration()
```

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName"></a>

```go
func ResetCookieName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput">CookieDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration">CookieDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName">CookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieDurationInput`<sup>Optional</sup> <a name="CookieDurationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```go
func CookieDurationInput() *f64
```

- *Type:* *f64

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```go
func CookieNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CookieDuration`<sup>Required</sup> <a name="CookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```go
func CookieDuration() *f64
```

- *Type:* *f64

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName"></a>

```go
func CookieName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue"></a>

```go
func InternalValue() LbTargetGroupStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---


### LbTargetGroupTargetFailoverList <a name="LbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.NewLbTargetGroupTargetFailoverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbTargetGroupTargetFailoverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get"></a>

```go
func Get(index *f64) LbTargetGroupTargetFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbTargetGroupTargetFailoverOutputReference <a name="LbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbtargetgroup"

lbtargetgroup.NewLbTargetGroupTargetFailoverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbTargetGroupTargetFailoverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">OnDeregistrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">OnUnhealthyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration">OnDeregistration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">OnUnhealthy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDeregistrationInput`<sup>Optional</sup> <a name="OnDeregistrationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```go
func OnDeregistrationInput() *string
```

- *Type:* *string

---

##### `OnUnhealthyInput`<sup>Optional</sup> <a name="OnUnhealthyInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```go
func OnUnhealthyInput() *string
```

- *Type:* *string

---

##### `OnDeregistration`<sup>Required</sup> <a name="OnDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```go
func OnDeregistration() *string
```

- *Type:* *string

---

##### `OnUnhealthy`<sup>Required</sup> <a name="OnUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```go
func OnUnhealthy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



