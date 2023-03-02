# `mediaConvertQueue` Submodule <a name="`mediaConvertQueue` Submodule" id="@cdktf/provider-aws.mediaConvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaConvertQueue <a name="MediaConvertQueue" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue aws_media_convert_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

mediaconvertqueue.NewMediaConvertQueue(scope Construct, id *string, config MediaConvertQueueConfig) MediaConvertQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings">PutReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings">ResetReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutReservationPlanSettings` <a name="PutReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings"></a>

```go
func PutReservationPlanSettings(value MediaConvertQueueReservationPlanSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId"></a>

```go
func ResetId()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan"></a>

```go
func ResetPricingPlan()
```

##### `ResetReservationPlanSettings` <a name="ResetReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings"></a>

```go
func ResetReservationPlanSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

mediaconvertqueue.MediaConvertQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

mediaconvertqueue.MediaConvertQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

mediaconvertqueue.MediaConvertQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings">ReservationPlanSettings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput">PricingPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput">ReservationPlanSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ReservationPlanSettings`<sup>Required</sup> <a name="ReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings"></a>

```go
func ReservationPlanSettings() MediaConvertQueueReservationPlanSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput"></a>

```go
func PricingPlanInput() *string
```

- *Type:* *string

---

##### `ReservationPlanSettingsInput`<sup>Optional</sup> <a name="ReservationPlanSettingsInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput"></a>

```go
func ReservationPlanSettingsInput() MediaConvertQueueReservationPlanSettings
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan"></a>

```go
func PricingPlan() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaConvertQueueConfig <a name="MediaConvertQueueConfig" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

&mediaconvertqueue.MediaConvertQueueConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	PricingPlan: *string,
	ReservationPlanSettings: github.com/cdktf/cdktf-provider-aws-go/aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings,
	Status: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings">ReservationPlanSettings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | reservation_plan_settings block. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan"></a>

```go
PricingPlan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}.

---

##### `ReservationPlanSettings`<sup>Optional</sup> <a name="ReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings"></a>

```go
ReservationPlanSettings MediaConvertQueueReservationPlanSettings
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

reservation_plan_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}.

---

### MediaConvertQueueReservationPlanSettings <a name="MediaConvertQueueReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

&mediaconvertqueue.MediaConvertQueueReservationPlanSettings {
	Commitment: *string,
	RenewalType: *string,
	ReservedSlots: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment">Commitment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType">RenewalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots">ReservedSlots</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}. |

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment"></a>

```go
Commitment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}.

---

##### `RenewalType`<sup>Required</sup> <a name="RenewalType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType"></a>

```go
RenewalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}.

---

##### `ReservedSlots`<sup>Required</sup> <a name="ReservedSlots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots"></a>

```go
ReservedSlots *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConvertQueueReservationPlanSettingsOutputReference <a name="MediaConvertQueueReservationPlanSettingsOutputReference" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mediaconvertqueue"

mediaconvertqueue.NewMediaConvertQueueReservationPlanSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaConvertQueueReservationPlanSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput">CommitmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput">RenewalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput">ReservedSlotsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment">Commitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType">RenewalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots">ReservedSlots</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitmentInput`<sup>Optional</sup> <a name="CommitmentInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput"></a>

```go
func CommitmentInput() *string
```

- *Type:* *string

---

##### `RenewalTypeInput`<sup>Optional</sup> <a name="RenewalTypeInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput"></a>

```go
func RenewalTypeInput() *string
```

- *Type:* *string

---

##### `ReservedSlotsInput`<sup>Optional</sup> <a name="ReservedSlotsInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput"></a>

```go
func ReservedSlotsInput() *f64
```

- *Type:* *f64

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment"></a>

```go
func Commitment() *string
```

- *Type:* *string

---

##### `RenewalType`<sup>Required</sup> <a name="RenewalType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType"></a>

```go
func RenewalType() *string
```

- *Type:* *string

---

##### `ReservedSlots`<sup>Required</sup> <a name="ReservedSlots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots"></a>

```go
func ReservedSlots() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaConvertQueueReservationPlanSettings
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---



