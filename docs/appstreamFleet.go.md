# `appstreamFleet` Submodule <a name="`appstreamFleet` Submodule" id="@cdktf/provider-aws.appstreamFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamFleet <a name="AppstreamFleet" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet aws_appstream_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.NewAppstreamFleet(scope Construct, id *string, config AppstreamFleetConfig) AppstreamFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig">AppstreamFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig">AppstreamFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putComputeCapacity">PutComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putDomainJoinInfo">PutDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds">ResetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDomainJoinInfo">ResetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess">ResetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetFleetType">ResetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds">ResetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetImageArn">ResetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds">ResetMaxUserDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetStreamView">ResetStreamView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutComputeCapacity` <a name="PutComputeCapacity" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putComputeCapacity"></a>

```go
func PutComputeCapacity(value AppstreamFleetComputeCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putComputeCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `PutDomainJoinInfo` <a name="PutDomainJoinInfo" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putDomainJoinInfo"></a>

```go
func PutDomainJoinInfo(value AppstreamFleetDomainJoinInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putVpcConfig"></a>

```go
func PutVpcConfig(value AppstreamFleetVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisconnectTimeoutInSeconds` <a name="ResetDisconnectTimeoutInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds"></a>

```go
func ResetDisconnectTimeoutInSeconds()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomainJoinInfo` <a name="ResetDomainJoinInfo" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetDomainJoinInfo"></a>

```go
func ResetDomainJoinInfo()
```

##### `ResetEnableDefaultInternetAccess` <a name="ResetEnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess"></a>

```go
func ResetEnableDefaultInternetAccess()
```

##### `ResetFleetType` <a name="ResetFleetType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetFleetType"></a>

```go
func ResetFleetType()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleDisconnectTimeoutInSeconds` <a name="ResetIdleDisconnectTimeoutInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds"></a>

```go
func ResetIdleDisconnectTimeoutInSeconds()
```

##### `ResetImageArn` <a name="ResetImageArn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetImageArn"></a>

```go
func ResetImageArn()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetMaxUserDurationInSeconds` <a name="ResetMaxUserDurationInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds"></a>

```go
func ResetMaxUserDurationInSeconds()
```

##### `ResetStreamView` <a name="ResetStreamView" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetStreamView"></a>

```go
func ResetStreamView()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.AppstreamFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.AppstreamFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.AppstreamFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.computeCapacity">ComputeCapacity</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.computeCapacityInput">ComputeCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput">DisconnectTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput">DomainJoinInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput">EnableDefaultInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.fleetTypeInput">FleetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput">IdleDisconnectTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageArnInput">ImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput">MaxUserDurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.streamViewInput">StreamViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.fleetType">FleetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.streamView">StreamView</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComputeCapacity`<sup>Required</sup> <a name="ComputeCapacity" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.computeCapacity"></a>

```go
func ComputeCapacity() AppstreamFleetComputeCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DomainJoinInfo`<sup>Required</sup> <a name="DomainJoinInfo" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.domainJoinInfo"></a>

```go
func DomainJoinInfo() AppstreamFleetDomainJoinInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.vpcConfig"></a>

```go
func VpcConfig() AppstreamFleetVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a>

---

##### `ComputeCapacityInput`<sup>Optional</sup> <a name="ComputeCapacityInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.computeCapacityInput"></a>

```go
func ComputeCapacityInput() AppstreamFleetComputeCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="DisconnectTimeoutInSecondsInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput"></a>

```go
func DisconnectTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainJoinInfoInput`<sup>Optional</sup> <a name="DomainJoinInfoInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput"></a>

```go
func DomainJoinInfoInput() AppstreamFleetDomainJoinInfo
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `EnableDefaultInternetAccessInput`<sup>Optional</sup> <a name="EnableDefaultInternetAccessInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput"></a>

```go
func EnableDefaultInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.fleetTypeInput"></a>

```go
func FleetTypeInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSecondsInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput"></a>

```go
func IdleDisconnectTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageArnInput"></a>

```go
func ImageArnInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `MaxUserDurationInSecondsInput`<sup>Optional</sup> <a name="MaxUserDurationInSecondsInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput"></a>

```go
func MaxUserDurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StreamViewInput`<sup>Optional</sup> <a name="StreamViewInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.streamViewInput"></a>

```go
func StreamViewInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.vpcConfigInput"></a>

```go
func VpcConfigInput() AppstreamFleetVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisconnectTimeoutInSeconds`<sup>Required</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds"></a>

```go
func DisconnectTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableDefaultInternetAccess`<sup>Required</sup> <a name="EnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess"></a>

```go
func EnableDefaultInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.fleetType"></a>

```go
func FleetType() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

```go
func IdleDisconnectTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `MaxUserDurationInSeconds`<sup>Required</sup> <a name="MaxUserDurationInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds"></a>

```go
func MaxUserDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StreamView`<sup>Required</sup> <a name="StreamView" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.streamView"></a>

```go
func StreamView() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamFleetComputeCapacity <a name="AppstreamFleetComputeCapacity" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

&appstreamfleet.AppstreamFleetComputeCapacity {
	DesiredInstances: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances">DesiredInstances</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#desired_instances AppstreamFleet#desired_instances}. |

---

##### `DesiredInstances`<sup>Required</sup> <a name="DesiredInstances" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances"></a>

```go
DesiredInstances *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#desired_instances AppstreamFleet#desired_instances}.

---

### AppstreamFleetConfig <a name="AppstreamFleetConfig" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

&appstreamfleet.AppstreamFleetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputeCapacity: github.com/cdktf/cdktf-provider-aws-go/aws.appstreamFleet.AppstreamFleetComputeCapacity,
	InstanceType: *string,
	Name: *string,
	Description: *string,
	DisconnectTimeoutInSeconds: *f64,
	DisplayName: *string,
	DomainJoinInfo: github.com/cdktf/cdktf-provider-aws-go/aws.appstreamFleet.AppstreamFleetDomainJoinInfo,
	EnableDefaultInternetAccess: interface{},
	FleetType: *string,
	IamRoleArn: *string,
	Id: *string,
	IdleDisconnectTimeoutInSeconds: *f64,
	ImageArn: *string,
	ImageName: *string,
	MaxUserDurationInSeconds: *f64,
	StreamView: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appstreamFleet.AppstreamFleetVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.computeCapacity">ComputeCapacity</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | compute_capacity block. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | domain_join_info block. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.fleetType">FleetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#id AppstreamFleet#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.imageArn">ImageArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.streamView">StreamView</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#tags_all AppstreamFleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeCapacity`<sup>Required</sup> <a name="ComputeCapacity" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.computeCapacity"></a>

```go
ComputeCapacity AppstreamFleetComputeCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

compute_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#name AppstreamFleet#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#description AppstreamFleet#description}.

---

##### `DisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds"></a>

```go
DisconnectTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `DomainJoinInfo`<sup>Optional</sup> <a name="DomainJoinInfo" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo"></a>

```go
DomainJoinInfo AppstreamFleetDomainJoinInfo
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

domain_join_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}

---

##### `EnableDefaultInternetAccess`<sup>Optional</sup> <a name="EnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess"></a>

```go
EnableDefaultInternetAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `FleetType`<sup>Optional</sup> <a name="FleetType" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.fleetType"></a>

```go
FleetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#id AppstreamFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds"></a>

```go
IdleDisconnectTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `ImageArn`<sup>Optional</sup> <a name="ImageArn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.imageArn"></a>

```go
ImageArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `MaxUserDurationInSeconds`<sup>Optional</sup> <a name="MaxUserDurationInSeconds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds"></a>

```go
MaxUserDurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `StreamView`<sup>Optional</sup> <a name="StreamView" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.streamView"></a>

```go
StreamView *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#tags_all AppstreamFleet#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetConfig.property.vpcConfig"></a>

```go
VpcConfig AppstreamFleetVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#vpc_config AppstreamFleet#vpc_config}

---

### AppstreamFleetDomainJoinInfo <a name="AppstreamFleetDomainJoinInfo" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

&appstreamfleet.AppstreamFleetDomainJoinInfo {
	DirectoryName: *string,
	OrganizationalUnitDistinguishedName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName">DirectoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#directory_name AppstreamFleet#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}. |

---

##### `DirectoryName`<sup>Optional</sup> <a name="DirectoryName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName"></a>

```go
DirectoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#directory_name AppstreamFleet#directory_name}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```go
OrganizationalUnitDistinguishedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}.

---

### AppstreamFleetVpcConfig <a name="AppstreamFleetVpcConfig" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

&appstreamfleet.AppstreamFleetVpcConfig {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamFleetComputeCapacityOutputReference <a name="AppstreamFleetComputeCapacityOutputReference" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.NewAppstreamFleetComputeCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamFleetComputeCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.available">Available</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.inUse">InUse</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.running">Running</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput">DesiredInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances">DesiredInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.available"></a>

```go
func Available() *f64
```

- *Type:* *f64

---

##### `InUse`<sup>Required</sup> <a name="InUse" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.inUse"></a>

```go
func InUse() *f64
```

- *Type:* *f64

---

##### `Running`<sup>Required</sup> <a name="Running" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.running"></a>

```go
func Running() *f64
```

- *Type:* *f64

---

##### `DesiredInstancesInput`<sup>Optional</sup> <a name="DesiredInstancesInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput"></a>

```go
func DesiredInstancesInput() *f64
```

- *Type:* *f64

---

##### `DesiredInstances`<sup>Required</sup> <a name="DesiredInstances" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances"></a>

```go
func DesiredInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() AppstreamFleetComputeCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---


### AppstreamFleetDomainJoinInfoOutputReference <a name="AppstreamFleetDomainJoinInfoOutputReference" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.NewAppstreamFleetDomainJoinInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamFleetDomainJoinInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName">ResetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryName` <a name="ResetDirectoryName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName"></a>

```go
func ResetDirectoryName()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```go
func ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput">DirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```go
func DirectoryNameInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```go
func OrganizationalUnitDistinguishedNameInput() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```go
func OrganizationalUnitDistinguishedName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() AppstreamFleetDomainJoinInfo
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---


### AppstreamFleetVpcConfigOutputReference <a name="AppstreamFleetVpcConfigOutputReference" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appstreamfleet"

appstreamfleet.NewAppstreamFleetVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamFleetVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppstreamFleetVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---



