# `configConfigurationRecorder` Submodule <a name="`configConfigurationRecorder` Submodule" id="@cdktf/provider-aws.configConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorder <a name="ConfigConfigurationRecorder" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder aws_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

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
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup">PutRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode">PutRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup">ResetRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode">ResetRecordingMode</a></code> | *No description.* |

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

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

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

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecordingGroup` <a name="PutRecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup"></a>

```go
func PutRecordingGroup(value ConfigConfigurationRecorderRecordingGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `PutRecordingMode` <a name="PutRecordingMode" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode"></a>

```go
func PutRecordingMode(value ConfigConfigurationRecorderRecordingMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

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

##### `ResetRecordingMode` <a name="ResetRecordingMode" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode"></a>

```go
func ResetRecordingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigConfigurationRecorder resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

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
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigConfigurationRecorder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigConfigurationRecorder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigConfigurationRecorder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationRecorder to import is found.

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
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode">RecordingMode</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput">RecordingGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput">RecordingModeInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |
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
func Count() interface{}
```

- *Type:* interface{}

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

##### `RecordingMode`<sup>Required</sup> <a name="RecordingMode" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode"></a>

```go
func RecordingMode() ConfigConfigurationRecorderRecordingModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a>

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

##### `RecordingModeInput`<sup>Optional</sup> <a name="RecordingModeInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput"></a>

```go
func RecordingModeInput() ConfigConfigurationRecorderRecordingMode
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

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
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RoleArn: *string,
	Id: *string,
	Name: *string,
	RecordingGroup: github.com/cdktf/cdktf-provider-aws-go/aws/v20.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup,
	RecordingMode: github.com/cdktf/cdktf-provider-aws-go/aws/v20.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#id ConfigConfigurationRecorder#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | recording_group block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode">RecordingMode</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | recording_mode block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#id ConfigConfigurationRecorder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}.

---

##### `RecordingGroup`<sup>Optional</sup> <a name="RecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup"></a>

```go
RecordingGroup ConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

recording_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `RecordingMode`<sup>Optional</sup> <a name="RecordingMode" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode"></a>

```go
RecordingMode ConfigConfigurationRecorderRecordingMode
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

recording_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

### ConfigConfigurationRecorderRecordingGroup <a name="ConfigConfigurationRecorderRecordingGroup" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroup {
	AllSupported: interface{},
	ExclusionByResourceTypes: interface{},
	IncludeGlobalResourceTypes: interface{},
	RecordingStrategy: interface{},
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes">ExclusionByResourceTypes</a></code> | <code>interface{}</code> | exclusion_by_resource_types block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes">IncludeGlobalResourceTypes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy">RecordingStrategy</a></code> | <code>interface{}</code> | recording_strategy block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}. |

---

##### `AllSupported`<sup>Optional</sup> <a name="AllSupported" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported"></a>

```go
AllSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}.

---

##### `ExclusionByResourceTypes`<sup>Optional</sup> <a name="ExclusionByResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes"></a>

```go
ExclusionByResourceTypes interface{}
```

- *Type:* interface{}

exclusion_by_resource_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}

---

##### `IncludeGlobalResourceTypes`<sup>Optional</sup> <a name="IncludeGlobalResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes"></a>

```go
IncludeGlobalResourceTypes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}.

---

##### `RecordingStrategy`<sup>Optional</sup> <a name="RecordingStrategy" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy"></a>

```go
RecordingStrategy interface{}
```

- *Type:* interface{}

recording_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}.

---

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}. |

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}.

---

### ConfigConfigurationRecorderRecordingGroupRecordingStrategy <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategy" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy {
	UseOnly: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly">UseOnly</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}. |

---

##### `UseOnly`<sup>Optional</sup> <a name="UseOnly" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly"></a>

```go
UseOnly *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}.

---

### ConfigConfigurationRecorderRecordingMode <a name="ConfigConfigurationRecorderRecordingMode" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingMode {
	RecordingFrequency: *string,
	RecordingModeOverride: github.com/cdktf/cdktf-provider-aws-go/aws/v20.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverride">RecordingModeOverride</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a></code> | recording_mode_override block. |

---

##### `RecordingFrequency`<sup>Optional</sup> <a name="RecordingFrequency" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency"></a>

```go
RecordingFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}.

---

##### `RecordingModeOverride`<sup>Optional</sup> <a name="RecordingModeOverride" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverride"></a>

```go
RecordingModeOverride ConfigConfigurationRecorderRecordingModeRecordingModeOverride
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a>

recording_mode_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_mode_override ConfigConfigurationRecorder#recording_mode_override}

---

### ConfigConfigurationRecorderRecordingModeRecordingModeOverride <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverride" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride {
	RecordingFrequency: *string,
	ResourceTypes: *[]*string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}. |

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.property.recordingFrequency"></a>

```go
RecordingFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}.

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.get"></a>

```go
func Get(index *f64) ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingGroupOutputReference <a name="ConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

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
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes">PutExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy">PutRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported">ResetAllSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes">ResetExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes">ResetIncludeGlobalResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy">ResetRecordingStrategy</a></code> | *No description.* |
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

##### `PutExclusionByResourceTypes` <a name="PutExclusionByResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes"></a>

```go
func PutExclusionByResourceTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRecordingStrategy` <a name="PutRecordingStrategy" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy"></a>

```go
func PutRecordingStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllSupported` <a name="ResetAllSupported" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported"></a>

```go
func ResetAllSupported()
```

##### `ResetExclusionByResourceTypes` <a name="ResetExclusionByResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes"></a>

```go
func ResetExclusionByResourceTypes()
```

##### `ResetIncludeGlobalResourceTypes` <a name="ResetIncludeGlobalResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes"></a>

```go
func ResetIncludeGlobalResourceTypes()
```

##### `ResetRecordingStrategy` <a name="ResetRecordingStrategy" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy"></a>

```go
func ResetRecordingStrategy()
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
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes">ExclusionByResourceTypes</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy">RecordingStrategy</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList">ConfigConfigurationRecorderRecordingGroupRecordingStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput">AllSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput">ExclusionByResourceTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput">IncludeGlobalResourceTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput">RecordingStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
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

##### `ExclusionByResourceTypes`<sup>Required</sup> <a name="ExclusionByResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes"></a>

```go
func ExclusionByResourceTypes() ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList</a>

---

##### `RecordingStrategy`<sup>Required</sup> <a name="RecordingStrategy" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy"></a>

```go
func RecordingStrategy() ConfigConfigurationRecorderRecordingGroupRecordingStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList">ConfigConfigurationRecorderRecordingGroupRecordingStrategyList</a>

---

##### `AllSupportedInput`<sup>Optional</sup> <a name="AllSupportedInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput"></a>

```go
func AllSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionByResourceTypesInput`<sup>Optional</sup> <a name="ExclusionByResourceTypesInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput"></a>

```go
func ExclusionByResourceTypesInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalResourceTypesInput`<sup>Optional</sup> <a name="IncludeGlobalResourceTypesInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput"></a>

```go
func IncludeGlobalResourceTypesInput() interface{}
```

- *Type:* interface{}

---

##### `RecordingStrategyInput`<sup>Optional</sup> <a name="RecordingStrategyInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput"></a>

```go
func RecordingStrategyInput() interface{}
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


### ConfigConfigurationRecorderRecordingGroupRecordingStrategyList <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategyList" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupRecordingStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConfigurationRecorderRecordingGroupRecordingStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.get"></a>

```go
func Get(index *f64) ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly">ResetUseOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseOnly` <a name="ResetUseOnly" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly"></a>

```go
func ResetUseOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput">UseOnlyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly">UseOnly</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseOnlyInput`<sup>Optional</sup> <a name="UseOnlyInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput"></a>

```go
func UseOnlyInput() *string
```

- *Type:* *string

---

##### `UseOnly`<sup>Required</sup> <a name="UseOnly" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly"></a>

```go
func UseOnly() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingModeOutputReference <a name="ConfigConfigurationRecorderRecordingModeOutputReference" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverride">PutRecordingModeOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency">ResetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverride">ResetRecordingModeOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordingModeOverride` <a name="PutRecordingModeOverride" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverride"></a>

```go
func PutRecordingModeOverride(value ConfigConfigurationRecorderRecordingModeRecordingModeOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a>

---

##### `ResetRecordingFrequency` <a name="ResetRecordingFrequency" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency"></a>

```go
func ResetRecordingFrequency()
```

##### `ResetRecordingModeOverride` <a name="ResetRecordingModeOverride" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverride"></a>

```go
func ResetRecordingModeOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverride">RecordingModeOverride</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference">ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput">RecordingFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrideInput">RecordingModeOverrideInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordingModeOverride`<sup>Required</sup> <a name="RecordingModeOverride" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverride"></a>

```go
func RecordingModeOverride() ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference">ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference</a>

---

##### `RecordingFrequencyInput`<sup>Optional</sup> <a name="RecordingFrequencyInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput"></a>

```go
func RecordingFrequencyInput() *string
```

- *Type:* *string

---

##### `RecordingModeOverrideInput`<sup>Optional</sup> <a name="RecordingModeOverrideInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrideInput"></a>

```go
func RecordingModeOverrideInput() ConfigConfigurationRecorderRecordingModeRecordingModeOverride
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a>

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency"></a>

```go
func RecordingFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigurationRecorderRecordingMode
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.recordingFrequencyInput">RecordingFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RecordingFrequencyInput`<sup>Optional</sup> <a name="RecordingFrequencyInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.recordingFrequencyInput"></a>

```go
func RecordingFrequencyInput() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.recordingFrequency"></a>

```go
func RecordingFrequency() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigurationRecorderRecordingModeRecordingModeOverride
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverride">ConfigConfigurationRecorderRecordingModeRecordingModeOverride</a>

---



