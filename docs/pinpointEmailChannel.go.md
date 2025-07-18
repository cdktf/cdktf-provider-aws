# `pinpointEmailChannel` Submodule <a name="`pinpointEmailChannel` Submodule" id="@cdktf/provider-aws.pinpointEmailChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointEmailChannel <a name="PinpointEmailChannel" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel aws_pinpoint_email_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/pinpointemailchannel"

pinpointemailchannel.NewPinpointEmailChannel(scope Construct, id *string, config PinpointEmailChannelConfig) PinpointEmailChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig">PinpointEmailChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig">PinpointEmailChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetConfigurationSet">ResetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOrchestrationSendingRoleArn">ResetOrchestrationSendingRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConfigurationSet` <a name="ResetConfigurationSet" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetConfigurationSet"></a>

```go
func ResetConfigurationSet()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetId"></a>

```go
func ResetId()
```

##### `ResetOrchestrationSendingRoleArn` <a name="ResetOrchestrationSendingRoleArn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOrchestrationSendingRoleArn"></a>

```go
func ResetOrchestrationSendingRoleArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRoleArn"></a>

```go
func ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PinpointEmailChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/pinpointemailchannel"

pinpointemailchannel.PinpointEmailChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/pinpointemailchannel"

pinpointemailchannel.PinpointEmailChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/pinpointemailchannel"

pinpointemailchannel.PinpointEmailChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/pinpointemailchannel"

pinpointemailchannel.PinpointEmailChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PinpointEmailChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PinpointEmailChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PinpointEmailChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PinpointEmailChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.messagesPerSecond">MessagesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSetInput">ConfigurationSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddressInput">FromAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArnInput">OrchestrationSendingRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddress">FromAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArn">OrchestrationSendingRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MessagesPerSecond`<sup>Required</sup> <a name="MessagesPerSecond" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.messagesPerSecond"></a>

```go
func MessagesPerSecond() *f64
```

- *Type:* *f64

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationSetInput`<sup>Optional</sup> <a name="ConfigurationSetInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSetInput"></a>

```go
func ConfigurationSetInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FromAddressInput`<sup>Optional</sup> <a name="FromAddressInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddressInput"></a>

```go
func FromAddressInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrchestrationSendingRoleArnInput`<sup>Optional</sup> <a name="OrchestrationSendingRoleArnInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArnInput"></a>

```go
func OrchestrationSendingRoleArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSet"></a>

```go
func ConfigurationSet() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FromAddress`<sup>Required</sup> <a name="FromAddress" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddress"></a>

```go
func FromAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `OrchestrationSendingRoleArn`<sup>Required</sup> <a name="OrchestrationSendingRoleArn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArn"></a>

```go
func OrchestrationSendingRoleArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointEmailChannelConfig <a name="PinpointEmailChannelConfig" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/pinpointemailchannel"

&pinpointemailchannel.PinpointEmailChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	FromAddress: *string,
	Identity: *string,
	ConfigurationSet: *string,
	Enabled: interface{},
	Id: *string,
	OrchestrationSendingRoleArn: *string,
	Region: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.fromAddress">FromAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.identity">Identity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.orchestrationSendingRoleArn">OrchestrationSendingRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}.

---

##### `FromAddress`<sup>Required</sup> <a name="FromAddress" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.fromAddress"></a>

```go
FromAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}.

---

##### `ConfigurationSet`<sup>Optional</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.configurationSet"></a>

```go
ConfigurationSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrchestrationSendingRoleArn`<sup>Optional</sup> <a name="OrchestrationSendingRoleArn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.orchestrationSendingRoleArn"></a>

```go
OrchestrationSendingRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#region PinpointEmailChannel#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}.

---



