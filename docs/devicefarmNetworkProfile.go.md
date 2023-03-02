# `devicefarmNetworkProfile` Submodule <a name="`devicefarmNetworkProfile` Submodule" id="@cdktf/provider-aws.devicefarmNetworkProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmNetworkProfile <a name="DevicefarmNetworkProfile" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile aws_devicefarm_network_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmnetworkprofile"

devicefarmnetworkprofile.NewDevicefarmNetworkProfile(scope Construct, id *string, config DevicefarmNetworkProfileConfig) DevicefarmNetworkProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig">DevicefarmNetworkProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig">DevicefarmNetworkProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits">ResetDownlinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs">ResetDownlinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs">ResetDownlinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent">ResetDownlinkLossPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits">ResetUplinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs">ResetUplinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs">ResetUplinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent">ResetUplinkLossPercent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDownlinkBandwidthBits` <a name="ResetDownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits"></a>

```go
func ResetDownlinkBandwidthBits()
```

##### `ResetDownlinkDelayMs` <a name="ResetDownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs"></a>

```go
func ResetDownlinkDelayMs()
```

##### `ResetDownlinkJitterMs` <a name="ResetDownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs"></a>

```go
func ResetDownlinkJitterMs()
```

##### `ResetDownlinkLossPercent` <a name="ResetDownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent"></a>

```go
func ResetDownlinkLossPercent()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType"></a>

```go
func ResetType()
```

##### `ResetUplinkBandwidthBits` <a name="ResetUplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits"></a>

```go
func ResetUplinkBandwidthBits()
```

##### `ResetUplinkDelayMs` <a name="ResetUplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs"></a>

```go
func ResetUplinkDelayMs()
```

##### `ResetUplinkJitterMs` <a name="ResetUplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs"></a>

```go
func ResetUplinkJitterMs()
```

##### `ResetUplinkLossPercent` <a name="ResetUplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent"></a>

```go
func ResetUplinkLossPercent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmnetworkprofile"

devicefarmnetworkprofile.DevicefarmNetworkProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmnetworkprofile"

devicefarmnetworkprofile.DevicefarmNetworkProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmnetworkprofile"

devicefarmnetworkprofile.DevicefarmNetworkProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput">DownlinkBandwidthBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput">DownlinkDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput">DownlinkJitterMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput">DownlinkLossPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput">ProjectArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput">UplinkBandwidthBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput">UplinkDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput">UplinkJitterMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput">UplinkLossPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits">DownlinkBandwidthBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs">DownlinkDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs">DownlinkJitterMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent">DownlinkLossPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn">ProjectArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits">UplinkBandwidthBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs">UplinkDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs">UplinkJitterMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent">UplinkLossPercent</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DownlinkBandwidthBitsInput`<sup>Optional</sup> <a name="DownlinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput"></a>

```go
func DownlinkBandwidthBitsInput() *f64
```

- *Type:* *f64

---

##### `DownlinkDelayMsInput`<sup>Optional</sup> <a name="DownlinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput"></a>

```go
func DownlinkDelayMsInput() *f64
```

- *Type:* *f64

---

##### `DownlinkJitterMsInput`<sup>Optional</sup> <a name="DownlinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput"></a>

```go
func DownlinkJitterMsInput() *f64
```

- *Type:* *f64

---

##### `DownlinkLossPercentInput`<sup>Optional</sup> <a name="DownlinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput"></a>

```go
func DownlinkLossPercentInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectArnInput`<sup>Optional</sup> <a name="ProjectArnInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput"></a>

```go
func ProjectArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UplinkBandwidthBitsInput`<sup>Optional</sup> <a name="UplinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput"></a>

```go
func UplinkBandwidthBitsInput() *f64
```

- *Type:* *f64

---

##### `UplinkDelayMsInput`<sup>Optional</sup> <a name="UplinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput"></a>

```go
func UplinkDelayMsInput() *f64
```

- *Type:* *f64

---

##### `UplinkJitterMsInput`<sup>Optional</sup> <a name="UplinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput"></a>

```go
func UplinkJitterMsInput() *f64
```

- *Type:* *f64

---

##### `UplinkLossPercentInput`<sup>Optional</sup> <a name="UplinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput"></a>

```go
func UplinkLossPercentInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DownlinkBandwidthBits`<sup>Required</sup> <a name="DownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits"></a>

```go
func DownlinkBandwidthBits() *f64
```

- *Type:* *f64

---

##### `DownlinkDelayMs`<sup>Required</sup> <a name="DownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs"></a>

```go
func DownlinkDelayMs() *f64
```

- *Type:* *f64

---

##### `DownlinkJitterMs`<sup>Required</sup> <a name="DownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs"></a>

```go
func DownlinkJitterMs() *f64
```

- *Type:* *f64

---

##### `DownlinkLossPercent`<sup>Required</sup> <a name="DownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent"></a>

```go
func DownlinkLossPercent() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectArn`<sup>Required</sup> <a name="ProjectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn"></a>

```go
func ProjectArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UplinkBandwidthBits`<sup>Required</sup> <a name="UplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits"></a>

```go
func UplinkBandwidthBits() *f64
```

- *Type:* *f64

---

##### `UplinkDelayMs`<sup>Required</sup> <a name="UplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs"></a>

```go
func UplinkDelayMs() *f64
```

- *Type:* *f64

---

##### `UplinkJitterMs`<sup>Required</sup> <a name="UplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs"></a>

```go
func UplinkJitterMs() *f64
```

- *Type:* *f64

---

##### `UplinkLossPercent`<sup>Required</sup> <a name="UplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent"></a>

```go
func UplinkLossPercent() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmNetworkProfileConfig <a name="DevicefarmNetworkProfileConfig" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmnetworkprofile"

&devicefarmnetworkprofile.DevicefarmNetworkProfileConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProjectArn: *string,
	Description: *string,
	DownlinkBandwidthBits: *f64,
	DownlinkDelayMs: *f64,
	DownlinkJitterMs: *f64,
	DownlinkLossPercent: *f64,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Type: *string,
	UplinkBandwidthBits: *f64,
	UplinkDelayMs: *f64,
	UplinkJitterMs: *f64,
	UplinkLossPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn">ProjectArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits">DownlinkBandwidthBits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs">DownlinkDelayMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs">DownlinkJitterMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent">DownlinkLossPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits">UplinkBandwidthBits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs">UplinkDelayMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs">UplinkJitterMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent">UplinkLossPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `ProjectArn`<sup>Required</sup> <a name="ProjectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn"></a>

```go
ProjectArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `DownlinkBandwidthBits`<sup>Optional</sup> <a name="DownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits"></a>

```go
DownlinkBandwidthBits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `DownlinkDelayMs`<sup>Optional</sup> <a name="DownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs"></a>

```go
DownlinkDelayMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `DownlinkJitterMs`<sup>Optional</sup> <a name="DownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs"></a>

```go
DownlinkJitterMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `DownlinkLossPercent`<sup>Optional</sup> <a name="DownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent"></a>

```go
DownlinkLossPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `UplinkBandwidthBits`<sup>Optional</sup> <a name="UplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits"></a>

```go
UplinkBandwidthBits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `UplinkDelayMs`<sup>Optional</sup> <a name="UplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs"></a>

```go
UplinkDelayMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `UplinkJitterMs`<sup>Optional</sup> <a name="UplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs"></a>

```go
UplinkJitterMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `UplinkLossPercent`<sup>Optional</sup> <a name="UplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent"></a>

```go
UplinkLossPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---



