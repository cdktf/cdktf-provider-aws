# `guarddutyDetector` Submodule <a name="`guarddutyDetector` Submodule" id="@cdktf/provider-aws.guarddutyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyDetector <a name="GuarddutyDetector" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector aws_guardduty_detector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetector(scope Construct, id *string, config GuarddutyDetectorConfig) GuarddutyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig">GuarddutyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig">GuarddutyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources">PutDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetDatasources">ResetDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency">ResetFindingPublishingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDatasources` <a name="PutDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources"></a>

```go
func PutDatasources(value GuarddutyDetectorDatasources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `ResetDatasources` <a name="ResetDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetDatasources"></a>

```go
func ResetDatasources()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetFindingPublishingFrequency` <a name="ResetFindingPublishingFrequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency"></a>

```go
func ResetFindingPublishingFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.GuarddutyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.GuarddutyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.GuarddutyDetector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasourcesInput">DatasourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput">FindingPublishingFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency">FindingPublishingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasources"></a>

```go
func Datasources() GuarddutyDetectorDatasourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a>

---

##### `DatasourcesInput`<sup>Optional</sup> <a name="DatasourcesInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasourcesInput"></a>

```go
func DatasourcesInput() GuarddutyDetectorDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `FindingPublishingFrequencyInput`<sup>Optional</sup> <a name="FindingPublishingFrequencyInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput"></a>

```go
func FindingPublishingFrequencyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `FindingPublishingFrequency`<sup>Required</sup> <a name="FindingPublishingFrequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency"></a>

```go
func FindingPublishingFrequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyDetectorConfig <a name="GuarddutyDetectorConfig" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Datasources: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasources,
	Enable: interface{},
	FindingPublishingFrequency: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency">FindingPublishingFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Datasources`<sup>Optional</sup> <a name="Datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.datasources"></a>

```go
Datasources GuarddutyDetectorDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#datasources GuarddutyDetector#datasources}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `FindingPublishingFrequency`<sup>Optional</sup> <a name="FindingPublishingFrequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency"></a>

```go
FindingPublishingFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}.

---

### GuarddutyDetectorDatasources <a name="GuarddutyDetectorDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasources {
	Kubernetes: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes,
	MalwareProtection: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection,
	S3Logs: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.malwareProtection">MalwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | malware_protection block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.kubernetes"></a>

```go
Kubernetes GuarddutyDetectorDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}

---

##### `MalwareProtection`<sup>Optional</sup> <a name="MalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.malwareProtection"></a>

```go
MalwareProtection GuarddutyDetectorDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

malware_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs"></a>

```go
S3Logs GuarddutyDetectorDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}

---

### GuarddutyDetectorDatasourcesKubernetes <a name="GuarddutyDetectorDatasourcesKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasourcesKubernetes {
	AuditLogs: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.property.auditLogs">AuditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | audit_logs block. |

---

##### `AuditLogs`<sup>Required</sup> <a name="AuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.property.auditLogs"></a>

```go
AuditLogs GuarddutyDetectorDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

audit_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}

---

### GuarddutyDetectorDatasourcesKubernetesAuditLogs <a name="GuarddutyDetectorDatasourcesKubernetesAuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDatasourcesMalwareProtection <a name="GuarddutyDetectorDatasourcesMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasourcesMalwareProtection {
	ScanEc2InstanceWithFindings: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | scan_ec2_instance_with_findings block. |

---

##### `ScanEc2InstanceWithFindings`<sup>Required</sup> <a name="ScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```go
ScanEc2InstanceWithFindings GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

scan_ec2_instance_with_findings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#scan_ec2_instance_with_findings GuarddutyDetector#scan_ec2_instance_with_findings}

---

### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
	EbsVolumes: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">EbsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | ebs_volumes block. |

---

##### `EbsVolumes`<sup>Required</sup> <a name="EbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```go
EbsVolumes GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

ebs_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}

---

### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDatasourcesS3Logs <a name="GuarddutyDetectorDatasourcesS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

&guarddutydetector.GuarddutyDetectorDatasourcesS3Logs {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference <a name="GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---


### GuarddutyDetectorDatasourcesKubernetesOutputReference <a name="GuarddutyDetectorDatasourcesKubernetesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs">PutAuditLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditLogs` <a name="PutAuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs"></a>

```go
func PutAuditLogs(value GuarddutyDetectorDatasourcesKubernetesAuditLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogs">AuditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogsInput">AuditLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogs`<sup>Required</sup> <a name="AuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogs"></a>

```go
func AuditLogs() GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference</a>

---

##### `AuditLogsInput`<sup>Optional</sup> <a name="AuditLogsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogsInput"></a>

```go
func AuditLogsInput() GuarddutyDetectorDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesMalwareProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesMalwareProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">PutScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScanEc2InstanceWithFindings` <a name="PutScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```go
func PutScanEc2InstanceWithFindings(value GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">ScanEc2InstanceWithFindingsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScanEc2InstanceWithFindings`<sup>Required</sup> <a name="ScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```go
func ScanEc2InstanceWithFindings() GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `ScanEc2InstanceWithFindingsInput`<sup>Optional</sup> <a name="ScanEc2InstanceWithFindingsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```go
func ScanEc2InstanceWithFindingsInput() GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes">PutEbsVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsVolumes` <a name="PutEbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes"></a>

```go
func PutEbsVolumes(value GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">EbsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">EbsVolumesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsVolumes`<sup>Required</sup> <a name="EbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```go
func EbsVolumes() GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a>

---

##### `EbsVolumesInput`<sup>Optional</sup> <a name="EbsVolumesInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```go
func EbsVolumesInput() GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyDetectorDatasourcesOutputReference <a name="GuarddutyDetectorDatasourcesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection">PutMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs">PutS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetMalwareProtection">ResetMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs">ResetS3Logs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes"></a>

```go
func PutKubernetes(value GuarddutyDetectorDatasourcesKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---

##### `PutMalwareProtection` <a name="PutMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection"></a>

```go
func PutMalwareProtection(value GuarddutyDetectorDatasourcesMalwareProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs"></a>

```go
func PutS3Logs(value GuarddutyDetectorDatasourcesS3Logs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetMalwareProtection` <a name="ResetMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetMalwareProtection"></a>

```go
func ResetMalwareProtection()
```

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs"></a>

```go
func ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference">GuarddutyDetectorDatasourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtection">MalwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtectionInput">MalwareProtectionInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetes"></a>

```go
func Kubernetes() GuarddutyDetectorDatasourcesKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference">GuarddutyDetectorDatasourcesKubernetesOutputReference</a>

---

##### `MalwareProtection`<sup>Required</sup> <a name="MalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtection"></a>

```go
func MalwareProtection() GuarddutyDetectorDatasourcesMalwareProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionOutputReference</a>

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs"></a>

```go
func S3Logs() GuarddutyDetectorDatasourcesS3LogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetesInput"></a>

```go
func KubernetesInput() GuarddutyDetectorDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---

##### `MalwareProtectionInput`<sup>Optional</sup> <a name="MalwareProtectionInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtectionInput"></a>

```go
func MalwareProtectionInput() GuarddutyDetectorDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput"></a>

```go
func S3LogsInput() GuarddutyDetectorDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---


### GuarddutyDetectorDatasourcesS3LogsOutputReference <a name="GuarddutyDetectorDatasourcesS3LogsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutydetector"

guarddutydetector.NewGuarddutyDetectorDatasourcesS3LogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyDetectorDatasourcesS3LogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyDetectorDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---



