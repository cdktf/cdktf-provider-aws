# `chimeVoiceConnectorTermination` Submodule <a name="`chimeVoiceConnectorTermination` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorTermination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTermination <a name="ChimeVoiceConnectorTermination" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination aws_chime_voice_connector_termination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectortermination"

chimevoiceconnectortermination.NewChimeVoiceConnectorTermination(scope Construct, id *string, config ChimeVoiceConnectorTerminationConfig) ChimeVoiceConnectorTermination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig">ChimeVoiceConnectorTerminationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig">ChimeVoiceConnectorTerminationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit">ResetCpsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber">ResetDefaultPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCpsLimit` <a name="ResetCpsLimit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit"></a>

```go
func ResetCpsLimit()
```

##### `ResetDefaultPhoneNumber` <a name="ResetDefaultPhoneNumber" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber"></a>

```go
func ResetDefaultPhoneNumber()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectortermination"

chimevoiceconnectortermination.ChimeVoiceConnectorTermination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectortermination"

chimevoiceconnectortermination.ChimeVoiceConnectorTermination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectortermination"

chimevoiceconnectortermination.ChimeVoiceConnectorTermination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput">CallingRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput">CidrAllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput">CpsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput">DefaultPhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions">CallingRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList">CidrAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit">CpsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber">DefaultPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CallingRegionsInput`<sup>Optional</sup> <a name="CallingRegionsInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput"></a>

```go
func CallingRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CidrAllowListInput`<sup>Optional</sup> <a name="CidrAllowListInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput"></a>

```go
func CidrAllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpsLimitInput`<sup>Optional</sup> <a name="CpsLimitInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput"></a>

```go
func CpsLimitInput() *f64
```

- *Type:* *f64

---

##### `DefaultPhoneNumberInput`<sup>Optional</sup> <a name="DefaultPhoneNumberInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput"></a>

```go
func DefaultPhoneNumberInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput"></a>

```go
func VoiceConnectorIdInput() *string
```

- *Type:* *string

---

##### `CallingRegions`<sup>Required</sup> <a name="CallingRegions" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions"></a>

```go
func CallingRegions() *[]*string
```

- *Type:* *[]*string

---

##### `CidrAllowList`<sup>Required</sup> <a name="CidrAllowList" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList"></a>

```go
func CidrAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `CpsLimit`<sup>Required</sup> <a name="CpsLimit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit"></a>

```go
func CpsLimit() *f64
```

- *Type:* *f64

---

##### `DefaultPhoneNumber`<sup>Required</sup> <a name="DefaultPhoneNumber" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber"></a>

```go
func DefaultPhoneNumber() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId"></a>

```go
func VoiceConnectorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationConfig <a name="ChimeVoiceConnectorTerminationConfig" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectortermination"

&chimevoiceconnectortermination.ChimeVoiceConnectorTerminationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CallingRegions: *[]*string,
	CidrAllowList: *[]*string,
	VoiceConnectorId: *string,
	CpsLimit: *f64,
	DefaultPhoneNumber: *string,
	Disabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions">CallingRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList">CidrAllowList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit">CpsLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber">DefaultPhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CallingRegions`<sup>Required</sup> <a name="CallingRegions" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions"></a>

```go
CallingRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}.

---

##### `CidrAllowList`<sup>Required</sup> <a name="CidrAllowList" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList"></a>

```go
CidrAllowList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}.

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId"></a>

```go
VoiceConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}.

---

##### `CpsLimit`<sup>Optional</sup> <a name="CpsLimit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit"></a>

```go
CpsLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}.

---

##### `DefaultPhoneNumber`<sup>Optional</sup> <a name="DefaultPhoneNumber" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber"></a>

```go
DefaultPhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



