# `flowLog` Submodule <a name="`flowLog` Submodule" id="@cdktf/provider-aws.flowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlowLog <a name="FlowLog" id="@cdktf/provider-aws.flowLog.FlowLog"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log aws_flow_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

flowlog.NewFlowLog(scope Construct, id *string, config FlowLogConfig) FlowLog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig">FlowLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogConfig">FlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions">PutDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetDestinationOptions">ResetDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetEniId">ResetEniId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogDestination">ResetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval">ResetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTrafficType">ResetTrafficType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId">ResetTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.flowLog.FlowLog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.flowLog.FlowLog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.flowLog.FlowLog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.flowLog.FlowLog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDestinationOptions` <a name="PutDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions"></a>

```go
func PutDestinationOptions(value FlowLogDestinationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `ResetDestinationOptions` <a name="ResetDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLog.resetDestinationOptions"></a>

```go
func ResetDestinationOptions()
```

##### `ResetEniId` <a name="ResetEniId" id="@cdktf/provider-aws.flowLog.FlowLog.resetEniId"></a>

```go
func ResetEniId()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktf/provider-aws.flowLog.FlowLog.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.flowLog.FlowLog.resetId"></a>

```go
func ResetId()
```

##### `ResetLogDestination` <a name="ResetLogDestination" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogDestination"></a>

```go
func ResetLogDestination()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogDestinationType"></a>

```go
func ResetLogDestinationType()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogFormat"></a>

```go
func ResetLogFormat()
```

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```

##### `ResetMaxAggregationInterval` <a name="ResetMaxAggregationInterval" id="@cdktf/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval"></a>

```go
func ResetMaxAggregationInterval()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.flowLog.FlowLog.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.flowLog.FlowLog.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.flowLog.FlowLog.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTrafficType` <a name="ResetTrafficType" id="@cdktf/provider-aws.flowLog.FlowLog.resetTrafficType"></a>

```go
func ResetTrafficType()
```

##### `ResetTransitGatewayAttachmentId` <a name="ResetTransitGatewayAttachmentId" id="@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId"></a>

```go
func ResetTransitGatewayAttachmentId()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayId"></a>

```go
func ResetTransitGatewayId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.flowLog.FlowLog.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.flowLog.FlowLog.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

flowlog.FlowLog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

flowlog.FlowLog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

flowlog.FlowLog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptions">DestinationOptions</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptionsInput">DestinationOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.eniIdInput">EniIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationInput">LogDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput">MaxAggregationIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.eniId">EniId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestination">LogDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.trafficType">TrafficType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.flowLog.FlowLog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.flowLog.FlowLog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.flowLog.FlowLog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.flowLog.FlowLog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.flowLog.FlowLog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.flowLog.FlowLog.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.flowLog.FlowLog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.flowLog.FlowLog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.flowLog.FlowLog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.flowLog.FlowLog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.flowLog.FlowLog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.flowLog.FlowLog.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationOptions`<sup>Required</sup> <a name="DestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptions"></a>

```go
func DestinationOptions() FlowLogDestinationOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a>

---

##### `DestinationOptionsInput`<sup>Optional</sup> <a name="DestinationOptionsInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptionsInput"></a>

```go
func DestinationOptionsInput() FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `EniIdInput`<sup>Optional</sup> <a name="EniIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.eniIdInput"></a>

```go
func EniIdInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationInput"></a>

```go
func LogDestinationInput() *string
```

- *Type:* *string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MaxAggregationIntervalInput`<sup>Optional</sup> <a name="MaxAggregationIntervalInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput"></a>

```go
func MaxAggregationIntervalInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.trafficTypeInput"></a>

```go
func TrafficTypeInput() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput"></a>

```go
func TransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `EniId`<sup>Required</sup> <a name="EniId" id="@cdktf/provider-aws.flowLog.FlowLog.property.eniId"></a>

```go
func EniId() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.flowLog.FlowLog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestination"></a>

```go
func LogDestination() *string
```

- *Type:* *string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.flowLog.FlowLog.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.flowLog.FlowLog.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MaxAggregationInterval`<sup>Required</sup> <a name="MaxAggregationInterval" id="@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationInterval"></a>

```go
func MaxAggregationInterval() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.flowLog.FlowLog.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.flowLog.FlowLog.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktf/provider-aws.flowLog.FlowLog.property.trafficType"></a>

```go
func TrafficType() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.flowLog.FlowLog.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.flowLog.FlowLog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FlowLogConfig <a name="FlowLogConfig" id="@cdktf/provider-aws.flowLog.FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.flowLog.FlowLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

&flowlog.FlowLogConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationOptions: github.com/cdktf/cdktf-provider-aws-go/aws.flowLog.FlowLogDestinationOptions,
	EniId: *string,
	IamRoleArn: *string,
	Id: *string,
	LogDestination: *string,
	LogDestinationType: *string,
	LogFormat: *string,
	LogGroupName: *string,
	MaxAggregationInterval: *f64,
	SubnetId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TrafficType: *string,
	TransitGatewayAttachmentId: *string,
	TransitGatewayId: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.destinationOptions">DestinationOptions</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | destination_options block. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.eniId">EniId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestination">LogDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logFormat">LogFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.trafficType">TrafficType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationOptions`<sup>Optional</sup> <a name="DestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.destinationOptions"></a>

```go
DestinationOptions FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

destination_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#destination_options FlowLog#destination_options}

---

##### `EniId`<sup>Optional</sup> <a name="EniId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.eniId"></a>

```go
EniId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogDestination`<sup>Optional</sup> <a name="LogDestination" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestination"></a>

```go
LogDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}.

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}.

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}.

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}.

---

##### `MaxAggregationInterval`<sup>Optional</sup> <a name="MaxAggregationInterval" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval"></a>

```go
MaxAggregationInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}.

---

##### `TrafficType`<sup>Optional</sup> <a name="TrafficType" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.trafficType"></a>

```go
TrafficType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}.

---

##### `TransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId"></a>

```go
TransitGatewayAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}.

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}.

---

### FlowLogDestinationOptions <a name="FlowLogDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

&flowlog.FlowLogDestinationOptions {
	FileFormat: *string,
	HiveCompatiblePartitions: interface{},
	PerHourPartition: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat">FileFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions">HiveCompatiblePartitions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition">PerHourPartition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}. |

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat"></a>

```go
FileFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}.

---

##### `HiveCompatiblePartitions`<sup>Optional</sup> <a name="HiveCompatiblePartitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```go
HiveCompatiblePartitions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}.

---

##### `PerHourPartition`<sup>Optional</sup> <a name="PerHourPartition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition"></a>

```go
PerHourPartition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}.

---

## Classes <a name="Classes" id="Classes"></a>

### FlowLogDestinationOptionsOutputReference <a name="FlowLogDestinationOptionsOutputReference" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/flowlog"

flowlog.NewFlowLogDestinationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FlowLogDestinationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">ResetHiveCompatiblePartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition">ResetPerHourPartition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```go
func ResetFileFormat()
```

##### `ResetHiveCompatiblePartitions` <a name="ResetHiveCompatiblePartitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```go
func ResetHiveCompatiblePartitions()
```

##### `ResetPerHourPartition` <a name="ResetPerHourPartition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```go
func ResetPerHourPartition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput">FileFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">HiveCompatiblePartitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">PerHourPartitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat">FileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">HiveCompatiblePartitions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition">PerHourPartition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```go
func FileFormatInput() *string
```

- *Type:* *string

---

##### `HiveCompatiblePartitionsInput`<sup>Optional</sup> <a name="HiveCompatiblePartitionsInput" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```go
func HiveCompatiblePartitionsInput() interface{}
```

- *Type:* interface{}

---

##### `PerHourPartitionInput`<sup>Optional</sup> <a name="PerHourPartitionInput" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```go
func PerHourPartitionInput() interface{}
```

- *Type:* interface{}

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```go
func FileFormat() *string
```

- *Type:* *string

---

##### `HiveCompatiblePartitions`<sup>Required</sup> <a name="HiveCompatiblePartitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```go
func HiveCompatiblePartitions() interface{}
```

- *Type:* interface{}

---

##### `PerHourPartition`<sup>Required</sup> <a name="PerHourPartition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```go
func PerHourPartition() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---



