# `configConfigurationRecorder` Submodule <a name="`configConfigurationRecorder` Submodule" id="@cdktf/provider-aws.configConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorder <a name="ConfigConfigurationRecorder" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder aws_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorder(scope Construct, id *string, config ConfigConfigurationRecorderConfig) ConfigConfigurationRecorder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig">ConfigConfigurationRecorderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig">ConfigConfigurationRecorderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup">PutRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup">ResetRecordingGroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRecordingGroup` <a name="PutRecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup"></a>

```go
func PutRecordingGroup(value ConfigConfigurationRecorderRecordingGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetName"></a>

```go
func ResetName()
```

##### `ResetRecordingGroup` <a name="ResetRecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup"></a>

```go
func ResetRecordingGroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput">RecordingGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RecordingGroup`<sup>Required</sup> <a name="RecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup"></a>

```go
func RecordingGroup() ConfigConfigurationRecorderRecordingGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecordingGroupInput`<sup>Optional</sup> <a name="RecordingGroupInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput"></a>

```go
func RecordingGroupInput() ConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationRecorderConfig <a name="ConfigConfigurationRecorderConfig" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RoleArn: *string,
	Id: *string,
	Name: *string,
	RecordingGroup: github.com/cdktf/cdktf-provider-aws-go/aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#id ConfigConfigurationRecorder#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#name ConfigConfigurationRecorder#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | recording_group block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#id ConfigConfigurationRecorder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#name ConfigConfigurationRecorder#name}.

---

##### `RecordingGroup`<sup>Optional</sup> <a name="RecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup"></a>

```go
RecordingGroup ConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

recording_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

### ConfigConfigurationRecorderRecordingGroup <a name="ConfigConfigurationRecorderRecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroup {
	AllSupported: interface{},
	IncludeGlobalResourceTypes: interface{},
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes">IncludeGlobalResourceTypes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}. |

---

##### `AllSupported`<sup>Optional</sup> <a name="AllSupported" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported"></a>

```go
AllSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}.

---

##### `IncludeGlobalResourceTypes`<sup>Optional</sup> <a name="IncludeGlobalResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes"></a>

```go
IncludeGlobalResourceTypes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationRecorderRecordingGroupOutputReference <a name="ConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported">ResetAllSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes">ResetIncludeGlobalResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllSupported` <a name="ResetAllSupported" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported"></a>

```go
func ResetAllSupported()
```

##### `ResetIncludeGlobalResourceTypes` <a name="ResetIncludeGlobalResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes"></a>

```go
func ResetIncludeGlobalResourceTypes()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput">AllSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput">IncludeGlobalResourceTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes">IncludeGlobalResourceTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllSupportedInput`<sup>Optional</sup> <a name="AllSupportedInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput"></a>

```go
func AllSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalResourceTypesInput`<sup>Optional</sup> <a name="IncludeGlobalResourceTypesInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput"></a>

```go
func IncludeGlobalResourceTypesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported"></a>

```go
func AllSupported() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalResourceTypes`<sup>Required</sup> <a name="IncludeGlobalResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes"></a>

```go
func IncludeGlobalResourceTypes() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---



