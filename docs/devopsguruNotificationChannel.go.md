# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktf/provider-aws.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel aws_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannel(scope Construct, id *string, config DevopsguruNotificationChannelConfig) DevopsguruNotificationChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns">PutSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetSns">ResetSns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSns` <a name="PutSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns"></a>

```go
func PutSns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetSns` <a name="ResetSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetSns"></a>

```go
func ResetSns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList">DevopsguruNotificationChannelFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.sns">Sns</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList">DevopsguruNotificationChannelSnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.snsInput">SnsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filters"></a>

```go
func Filters() DevopsguruNotificationChannelFiltersList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList">DevopsguruNotificationChannelFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.sns"></a>

```go
func Sns() DevopsguruNotificationChannelSnsList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList">DevopsguruNotificationChannelSnsList</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `SnsInput`<sup>Optional</sup> <a name="SnsInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.snsInput"></a>

```go
func SnsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filters: interface{},
	Sns: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.filters">Filters</a></code> | <code>interface{}</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.sns">Sns</a></code> | <code>interface{}</code> | sns block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.sns"></a>

```go
Sns interface{}
```

- *Type:* interface{}

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelFilters <a name="DevopsguruNotificationChannelFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelFilters {
	MessageTypes: *[]*string,
	Severities: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.messageTypes">MessageTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.severities">Severities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}. |

---

##### `MessageTypes`<sup>Optional</sup> <a name="MessageTypes" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.messageTypes"></a>

```go
MessageTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}.

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.severities"></a>

```go
Severities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}.

---

### DevopsguruNotificationChannelSns <a name="DevopsguruNotificationChannelSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelSns {
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelFiltersList <a name="DevopsguruNotificationChannelFiltersList" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsguruNotificationChannelFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get"></a>

```go
func Get(index *f64) DevopsguruNotificationChannelFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruNotificationChannelFiltersOutputReference <a name="DevopsguruNotificationChannelFiltersOutputReference" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsguruNotificationChannelFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetMessageTypes">ResetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageTypes` <a name="ResetMessageTypes" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetMessageTypes"></a>

```go
func ResetMessageTypes()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetSeverities"></a>

```go
func ResetSeverities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypesInput">MessageTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypes">MessageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageTypesInput`<sup>Optional</sup> <a name="MessageTypesInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypesInput"></a>

```go
func MessageTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severitiesInput"></a>

```go
func SeveritiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MessageTypes`<sup>Required</sup> <a name="MessageTypes" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypes"></a>

```go
func MessageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruNotificationChannelSnsList <a name="DevopsguruNotificationChannelSnsList" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelSnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsguruNotificationChannelSnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get"></a>

```go
func Get(index *f64) DevopsguruNotificationChannelSnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruNotificationChannelSnsOutputReference <a name="DevopsguruNotificationChannelSnsOutputReference" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelSnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsguruNotificationChannelSnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



