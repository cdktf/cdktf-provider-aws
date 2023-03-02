# `snsSmsPreferences` Submodule <a name="`snsSmsPreferences` Submodule" id="@cdktf/provider-aws.snsSmsPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSmsPreferences <a name="SnsSmsPreferences" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences aws_sns_sms_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snssmspreferences"

snssmspreferences.NewSnsSmsPreferences(scope Construct, id *string, config SnsSmsPreferencesConfig) SnsSmsPreferences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig">SnsSmsPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig">SnsSmsPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId">ResetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType">ResetDefaultSmsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn">ResetDeliveryStatusIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate">ResetDeliveryStatusSuccessSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit">ResetMonthlySpendLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket">ResetUsageReportS3Bucket</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefaultSenderId` <a name="ResetDefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId"></a>

```go
func ResetDefaultSenderId()
```

##### `ResetDefaultSmsType` <a name="ResetDefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType"></a>

```go
func ResetDefaultSmsType()
```

##### `ResetDeliveryStatusIamRoleArn` <a name="ResetDeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn"></a>

```go
func ResetDeliveryStatusIamRoleArn()
```

##### `ResetDeliveryStatusSuccessSamplingRate` <a name="ResetDeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate"></a>

```go
func ResetDeliveryStatusSuccessSamplingRate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId"></a>

```go
func ResetId()
```

##### `ResetMonthlySpendLimit` <a name="ResetMonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit"></a>

```go
func ResetMonthlySpendLimit()
```

##### `ResetUsageReportS3Bucket` <a name="ResetUsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket"></a>

```go
func ResetUsageReportS3Bucket()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snssmspreferences"

snssmspreferences.SnsSmsPreferences_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snssmspreferences"

snssmspreferences.SnsSmsPreferences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snssmspreferences"

snssmspreferences.SnsSmsPreferences_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput">DefaultSenderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput">DefaultSmsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput">DeliveryStatusIamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput">DeliveryStatusSuccessSamplingRateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput">MonthlySpendLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput">UsageReportS3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId">DefaultSenderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType">DefaultSmsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn">DeliveryStatusIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate">DeliveryStatusSuccessSamplingRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit">MonthlySpendLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket">UsageReportS3Bucket</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultSenderIdInput`<sup>Optional</sup> <a name="DefaultSenderIdInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput"></a>

```go
func DefaultSenderIdInput() *string
```

- *Type:* *string

---

##### `DefaultSmsTypeInput`<sup>Optional</sup> <a name="DefaultSmsTypeInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput"></a>

```go
func DefaultSmsTypeInput() *string
```

- *Type:* *string

---

##### `DeliveryStatusIamRoleArnInput`<sup>Optional</sup> <a name="DeliveryStatusIamRoleArnInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput"></a>

```go
func DeliveryStatusIamRoleArnInput() *string
```

- *Type:* *string

---

##### `DeliveryStatusSuccessSamplingRateInput`<sup>Optional</sup> <a name="DeliveryStatusSuccessSamplingRateInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput"></a>

```go
func DeliveryStatusSuccessSamplingRateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonthlySpendLimitInput`<sup>Optional</sup> <a name="MonthlySpendLimitInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput"></a>

```go
func MonthlySpendLimitInput() *f64
```

- *Type:* *f64

---

##### `UsageReportS3BucketInput`<sup>Optional</sup> <a name="UsageReportS3BucketInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput"></a>

```go
func UsageReportS3BucketInput() *string
```

- *Type:* *string

---

##### `DefaultSenderId`<sup>Required</sup> <a name="DefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId"></a>

```go
func DefaultSenderId() *string
```

- *Type:* *string

---

##### `DefaultSmsType`<sup>Required</sup> <a name="DefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType"></a>

```go
func DefaultSmsType() *string
```

- *Type:* *string

---

##### `DeliveryStatusIamRoleArn`<sup>Required</sup> <a name="DeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn"></a>

```go
func DeliveryStatusIamRoleArn() *string
```

- *Type:* *string

---

##### `DeliveryStatusSuccessSamplingRate`<sup>Required</sup> <a name="DeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate"></a>

```go
func DeliveryStatusSuccessSamplingRate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonthlySpendLimit`<sup>Required</sup> <a name="MonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit"></a>

```go
func MonthlySpendLimit() *f64
```

- *Type:* *f64

---

##### `UsageReportS3Bucket`<sup>Required</sup> <a name="UsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket"></a>

```go
func UsageReportS3Bucket() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSmsPreferencesConfig <a name="SnsSmsPreferencesConfig" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snssmspreferences"

&snssmspreferences.SnsSmsPreferencesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultSenderId: *string,
	DefaultSmsType: *string,
	DeliveryStatusIamRoleArn: *string,
	DeliveryStatusSuccessSamplingRate: *string,
	Id: *string,
	MonthlySpendLimit: *f64,
	UsageReportS3Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId">DefaultSenderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType">DefaultSmsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn">DeliveryStatusIamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate">DeliveryStatusSuccessSamplingRate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit">MonthlySpendLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket">UsageReportS3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultSenderId`<sup>Optional</sup> <a name="DefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId"></a>

```go
DefaultSenderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}.

---

##### `DefaultSmsType`<sup>Optional</sup> <a name="DefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType"></a>

```go
DefaultSmsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}.

---

##### `DeliveryStatusIamRoleArn`<sup>Optional</sup> <a name="DeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn"></a>

```go
DeliveryStatusIamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.

---

##### `DeliveryStatusSuccessSamplingRate`<sup>Optional</sup> <a name="DeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate"></a>

```go
DeliveryStatusSuccessSamplingRate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthlySpendLimit`<sup>Optional</sup> <a name="MonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit"></a>

```go
MonthlySpendLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.

---

##### `UsageReportS3Bucket`<sup>Optional</sup> <a name="UsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket"></a>

```go
UsageReportS3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.

---



