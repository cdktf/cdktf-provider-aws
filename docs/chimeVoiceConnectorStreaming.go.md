# `chimeVoiceConnectorStreaming` Submodule <a name="`chimeVoiceConnectorStreaming` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorStreaming <a name="ChimeVoiceConnectorStreaming" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

chimevoiceconnectorstreaming.NewChimeVoiceConnectorStreaming(scope Construct, id *string, config ChimeVoiceConnectorStreamingConfig) ChimeVoiceConnectorStreaming
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig">ChimeVoiceConnectorStreamingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig">ChimeVoiceConnectorStreamingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration">PutMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetMediaInsightsConfiguration">ResetMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetStreamingNotificationTargets">ResetStreamingNotificationTargets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMediaInsightsConfiguration` <a name="PutMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration"></a>

```go
func PutMediaInsightsConfiguration(value ChimeVoiceConnectorStreamingMediaInsightsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetId"></a>

```go
func ResetId()
```

##### `ResetMediaInsightsConfiguration` <a name="ResetMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetMediaInsightsConfiguration"></a>

```go
func ResetMediaInsightsConfiguration()
```

##### `ResetStreamingNotificationTargets` <a name="ResetStreamingNotificationTargets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetStreamingNotificationTargets"></a>

```go
func ResetStreamingNotificationTargets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

chimevoiceconnectorstreaming.ChimeVoiceConnectorStreaming_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

chimevoiceconnectorstreaming.ChimeVoiceConnectorStreaming_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

chimevoiceconnectorstreaming.ChimeVoiceConnectorStreaming_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

chimevoiceconnectorstreaming.ChimeVoiceConnectorStreaming_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChimeVoiceConnectorStreaming to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChimeVoiceConnectorStreaming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorStreaming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfiguration">MediaInsightsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference">ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetentionInput">DataRetentionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfigurationInput">MediaInsightsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargetsInput">StreamingNotificationTargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetention">DataRetention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargets">StreamingNotificationTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MediaInsightsConfiguration`<sup>Required</sup> <a name="MediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfiguration"></a>

```go
func MediaInsightsConfiguration() ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference">ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference</a>

---

##### `DataRetentionInput`<sup>Optional</sup> <a name="DataRetentionInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetentionInput"></a>

```go
func DataRetentionInput() *f64
```

- *Type:* *f64

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MediaInsightsConfigurationInput`<sup>Optional</sup> <a name="MediaInsightsConfigurationInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfigurationInput"></a>

```go
func MediaInsightsConfigurationInput() ChimeVoiceConnectorStreamingMediaInsightsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---

##### `StreamingNotificationTargetsInput`<sup>Optional</sup> <a name="StreamingNotificationTargetsInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargetsInput"></a>

```go
func StreamingNotificationTargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorIdInput"></a>

```go
func VoiceConnectorIdInput() *string
```

- *Type:* *string

---

##### `DataRetention`<sup>Required</sup> <a name="DataRetention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetention"></a>

```go
func DataRetention() *f64
```

- *Type:* *f64

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StreamingNotificationTargets`<sup>Required</sup> <a name="StreamingNotificationTargets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargets"></a>

```go
func StreamingNotificationTargets() *[]*string
```

- *Type:* *[]*string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorId"></a>

```go
func VoiceConnectorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorStreamingConfig <a name="ChimeVoiceConnectorStreamingConfig" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

&chimevoiceconnectorstreaming.ChimeVoiceConnectorStreamingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataRetention: *f64,
	VoiceConnectorId: *string,
	Disabled: interface{},
	Id: *string,
	MediaInsightsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration,
	StreamingNotificationTargets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dataRetention">DataRetention</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.mediaInsightsConfiguration">MediaInsightsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | media_insights_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.streamingNotificationTargets">StreamingNotificationTargets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataRetention`<sup>Required</sup> <a name="DataRetention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dataRetention"></a>

```go
DataRetention *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}.

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.voiceConnectorId"></a>

```go
VoiceConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MediaInsightsConfiguration`<sup>Optional</sup> <a name="MediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.mediaInsightsConfiguration"></a>

```go
MediaInsightsConfiguration ChimeVoiceConnectorStreamingMediaInsightsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

media_insights_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}

---

##### `StreamingNotificationTargets`<sup>Optional</sup> <a name="StreamingNotificationTargets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.streamingNotificationTargets"></a>

```go
StreamingNotificationTargets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}.

---

### ChimeVoiceConnectorStreamingMediaInsightsConfiguration <a name="ChimeVoiceConnectorStreamingMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

&chimevoiceconnectorstreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration {
	ConfigurationArn: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.configurationArn">ConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |

---

##### `ConfigurationArn`<sup>Optional</sup> <a name="ConfigurationArn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.configurationArn"></a>

```go
ConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference <a name="ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorstreaming"

chimevoiceconnectorstreaming.NewChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetConfigurationArn">ResetConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationArn` <a name="ResetConfigurationArn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetConfigurationArn"></a>

```go
func ResetConfigurationArn()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArnInput">ConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArn">ConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationArnInput`<sup>Optional</sup> <a name="ConfigurationArnInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArnInput"></a>

```go
func ConfigurationArnInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationArn`<sup>Required</sup> <a name="ConfigurationArn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArn"></a>

```go
func ConfigurationArn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ChimeVoiceConnectorStreamingMediaInsightsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---



