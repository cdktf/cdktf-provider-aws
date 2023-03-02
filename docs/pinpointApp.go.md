# `pinpointApp` Submodule <a name="`pinpointApp` Submodule" id="@cdktf/provider-aws.pinpointApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApp <a name="PinpointApp" id="@cdktf/provider-aws.pinpointApp.PinpointApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app aws_pinpoint_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.NewPinpointApp(scope Construct, id *string, config PinpointAppConfig) PinpointApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig">PinpointAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig">PinpointAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook">PutCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime">PutQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook">ResetCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime">ResetQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCampaignHook` <a name="PutCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook"></a>

```go
func PutCampaignHook(value PinpointAppCampaignHook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits"></a>

```go
func PutLimits(value PinpointAppLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `PutQuietTime` <a name="PutQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime"></a>

```go
func PutQuietTime(value PinpointAppQuietTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `ResetCampaignHook` <a name="ResetCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook"></a>

```go
func ResetCampaignHook()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetId"></a>

```go
func ResetId()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetQuietTime` <a name="ResetQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime"></a>

```go
func ResetQuietTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.PinpointApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.PinpointApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.PinpointApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook">CampaignHook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime">QuietTime</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput">CampaignHookInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput">QuietTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CampaignHook`<sup>Required</sup> <a name="CampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook"></a>

```go
func CampaignHook() PinpointAppCampaignHookOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits"></a>

```go
func Limits() PinpointAppLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a>

---

##### `QuietTime`<sup>Required</sup> <a name="QuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime"></a>

```go
func QuietTime() PinpointAppQuietTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a>

---

##### `CampaignHookInput`<sup>Optional</sup> <a name="CampaignHookInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput"></a>

```go
func CampaignHookInput() PinpointAppCampaignHook
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput"></a>

```go
func LimitsInput() PinpointAppLimits
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `QuietTimeInput`<sup>Optional</sup> <a name="QuietTimeInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput"></a>

```go
func QuietTimeInput() PinpointAppQuietTime
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointAppCampaignHook <a name="PinpointAppCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

&pinpointapp.PinpointAppCampaignHook {
	LambdaFunctionName: *string,
	Mode: *string,
	WebUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName">LambdaFunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl">WebUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}. |

---

##### `LambdaFunctionName`<sup>Optional</sup> <a name="LambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName"></a>

```go
LambdaFunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}.

---

##### `WebUrl`<sup>Optional</sup> <a name="WebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl"></a>

```go
WebUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}.

---

### PinpointAppConfig <a name="PinpointAppConfig" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

&pinpointapp.PinpointAppConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CampaignHook: github.com/cdktf/cdktf-provider-aws-go/aws.pinpointApp.PinpointAppCampaignHook,
	Id: *string,
	Limits: github.com/cdktf/cdktf-provider-aws-go/aws.pinpointApp.PinpointAppLimits,
	Name: *string,
	NamePrefix: *string,
	QuietTime: github.com/cdktf/cdktf-provider-aws-go/aws.pinpointApp.PinpointAppQuietTime,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook">CampaignHook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | campaign_hook block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime">QuietTime</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | quiet_time block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CampaignHook`<sup>Optional</sup> <a name="CampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook"></a>

```go
CampaignHook PinpointAppCampaignHook
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

campaign_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#campaign_hook PinpointApp#campaign_hook}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits"></a>

```go
Limits PinpointAppLimits
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#limits PinpointApp#limits}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}.

---

##### `QuietTime`<sup>Optional</sup> <a name="QuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime"></a>

```go
QuietTime PinpointAppQuietTime
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

quiet_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#quiet_time PinpointApp#quiet_time}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}.

---

### PinpointAppLimits <a name="PinpointAppLimits" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

&pinpointapp.PinpointAppLimits {
	Daily: *f64,
	MaximumDuration: *f64,
	MessagesPerSecond: *f64,
	Total: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily">Daily</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration">MaximumDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond">MessagesPerSecond</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total">Total</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}. |

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily"></a>

```go
Daily *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}.

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration"></a>

```go
MaximumDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}.

---

##### `MessagesPerSecond`<sup>Optional</sup> <a name="MessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond"></a>

```go
MessagesPerSecond *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}.

---

##### `Total`<sup>Optional</sup> <a name="Total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total"></a>

```go
Total *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}.

---

### PinpointAppQuietTime <a name="PinpointAppQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

&pinpointapp.PinpointAppQuietTime {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}.

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointAppCampaignHookOutputReference <a name="PinpointAppCampaignHookOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.NewPinpointAppCampaignHookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointAppCampaignHookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName">ResetLambdaFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl">ResetWebUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaFunctionName` <a name="ResetLambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName"></a>

```go
func ResetLambdaFunctionName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetWebUrl` <a name="ResetWebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl"></a>

```go
func ResetWebUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput">LambdaFunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput">WebUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName">LambdaFunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaFunctionNameInput`<sup>Optional</sup> <a name="LambdaFunctionNameInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput"></a>

```go
func LambdaFunctionNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `WebUrlInput`<sup>Optional</sup> <a name="WebUrlInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput"></a>

```go
func WebUrlInput() *string
```

- *Type:* *string

---

##### `LambdaFunctionName`<sup>Required</sup> <a name="LambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName"></a>

```go
func LambdaFunctionName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue"></a>

```go
func InternalValue() PinpointAppCampaignHook
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---


### PinpointAppLimitsOutputReference <a name="PinpointAppLimitsOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.NewPinpointAppLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointAppLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond">ResetMessagesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal">ResetTotal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily"></a>

```go
func ResetDaily()
```

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration"></a>

```go
func ResetMaximumDuration()
```

##### `ResetMessagesPerSecond` <a name="ResetMessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond"></a>

```go
func ResetMessagesPerSecond()
```

##### `ResetTotal` <a name="ResetTotal" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal"></a>

```go
func ResetTotal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput">DailyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput">MessagesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput">TotalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily">Daily</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration">MaximumDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond">MessagesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total">Total</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput"></a>

```go
func DailyInput() *f64
```

- *Type:* *f64

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput"></a>

```go
func MaximumDurationInput() *f64
```

- *Type:* *f64

---

##### `MessagesPerSecondInput`<sup>Optional</sup> <a name="MessagesPerSecondInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput"></a>

```go
func MessagesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TotalInput`<sup>Optional</sup> <a name="TotalInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput"></a>

```go
func TotalInput() *f64
```

- *Type:* *f64

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily"></a>

```go
func Daily() *f64
```

- *Type:* *f64

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration"></a>

```go
func MaximumDuration() *f64
```

- *Type:* *f64

---

##### `MessagesPerSecond`<sup>Required</sup> <a name="MessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond"></a>

```go
func MessagesPerSecond() *f64
```

- *Type:* *f64

---

##### `Total`<sup>Required</sup> <a name="Total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total"></a>

```go
func Total() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() PinpointAppLimits
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---


### PinpointAppQuietTimeOutputReference <a name="PinpointAppQuietTimeOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapp"

pinpointapp.NewPinpointAppQuietTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointAppQuietTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() PinpointAppQuietTime
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---



