# `appautoscalingTarget` Submodule <a name="`appautoscalingTarget` Submodule" id="@cdktf/provider-aws.appautoscalingTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingTarget <a name="AppautoscalingTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target aws_appautoscaling_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

appautoscalingtarget.NewAppautoscalingTarget(scope Construct, id *string, config AppautoscalingTargetConfig) AppautoscalingTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig">AppautoscalingTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig">AppautoscalingTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.putSuspendedState">PutSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetSuspendedState">ResetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSuspendedState` <a name="PutSuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.putSuspendedState"></a>

```go
func PutSuspendedState(value AppautoscalingTargetSuspendedState)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.putSuspendedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetId"></a>

```go
func ResetId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSuspendedState` <a name="ResetSuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetSuspendedState"></a>

```go
func ResetSuspendedState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppautoscalingTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

appautoscalingtarget.AppautoscalingTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

appautoscalingtarget.AppautoscalingTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

appautoscalingtarget.AppautoscalingTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

appautoscalingtarget.AppautoscalingTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppautoscalingTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppautoscalingTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppautoscalingTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppautoscalingTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference">AppautoscalingTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimensionInput">ScalableDimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedStateInput">SuspendedStateInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimension">ScalableDimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespace">ServiceNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `SuspendedState`<sup>Required</sup> <a name="SuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedState"></a>

```go
func SuspendedState() AppautoscalingTargetSuspendedStateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference">AppautoscalingTargetSuspendedStateOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ScalableDimensionInput`<sup>Optional</sup> <a name="ScalableDimensionInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimensionInput"></a>

```go
func ScalableDimensionInput() *string
```

- *Type:* *string

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespaceInput"></a>

```go
func ServiceNamespaceInput() *string
```

- *Type:* *string

---

##### `SuspendedStateInput`<sup>Optional</sup> <a name="SuspendedStateInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedStateInput"></a>

```go
func SuspendedStateInput() AppautoscalingTargetSuspendedState
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimension"></a>

```go
func ScalableDimension() *string
```

- *Type:* *string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespace"></a>

```go
func ServiceNamespace() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingTargetConfig <a name="AppautoscalingTargetConfig" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

&appautoscalingtarget.AppautoscalingTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MaxCapacity: *f64,
	MinCapacity: *f64,
	ResourceId: *string,
	ScalableDimension: *string,
	ServiceNamespace: *string,
	Id: *string,
	RoleArn: *string,
	SuspendedState: github.com/cdktf/cdktf-provider-aws-go/aws.appautoscalingTarget.AppautoscalingTargetSuspendedState,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#max_capacity AppautoscalingTarget#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#min_capacity AppautoscalingTarget#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#resource_id AppautoscalingTarget#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.scalableDimension">ScalableDimension</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#scalable_dimension AppautoscalingTarget#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#service_namespace AppautoscalingTarget#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#id AppautoscalingTarget#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#role_arn AppautoscalingTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a></code> | suspended_state block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#tags AppautoscalingTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#tags_all AppautoscalingTarget#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#max_capacity AppautoscalingTarget#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#min_capacity AppautoscalingTarget#min_capacity}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#resource_id AppautoscalingTarget#resource_id}.

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.scalableDimension"></a>

```go
ScalableDimension *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#scalable_dimension AppautoscalingTarget#scalable_dimension}.

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.serviceNamespace"></a>

```go
ServiceNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#service_namespace AppautoscalingTarget#service_namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#id AppautoscalingTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#role_arn AppautoscalingTarget#role_arn}.

---

##### `SuspendedState`<sup>Optional</sup> <a name="SuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.suspendedState"></a>

```go
SuspendedState AppautoscalingTargetSuspendedState
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

suspended_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#suspended_state AppautoscalingTarget#suspended_state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#tags AppautoscalingTarget#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#tags_all AppautoscalingTarget#tags_all}.

---

### AppautoscalingTargetSuspendedState <a name="AppautoscalingTargetSuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

&appautoscalingtarget.AppautoscalingTargetSuspendedState {
	DynamicScalingInSuspended: interface{},
	DynamicScalingOutSuspended: interface{},
	ScheduledScalingSuspended: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#dynamic_scaling_in_suspended AppautoscalingTarget#dynamic_scaling_in_suspended}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#dynamic_scaling_out_suspended AppautoscalingTarget#dynamic_scaling_out_suspended}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#scheduled_scaling_suspended AppautoscalingTarget#scheduled_scaling_suspended}. |

---

##### `DynamicScalingInSuspended`<sup>Optional</sup> <a name="DynamicScalingInSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingInSuspended"></a>

```go
DynamicScalingInSuspended interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#dynamic_scaling_in_suspended AppautoscalingTarget#dynamic_scaling_in_suspended}.

---

##### `DynamicScalingOutSuspended`<sup>Optional</sup> <a name="DynamicScalingOutSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingOutSuspended"></a>

```go
DynamicScalingOutSuspended interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#dynamic_scaling_out_suspended AppautoscalingTarget#dynamic_scaling_out_suspended}.

---

##### `ScheduledScalingSuspended`<sup>Optional</sup> <a name="ScheduledScalingSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.scheduledScalingSuspended"></a>

```go
ScheduledScalingSuspended interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/appautoscaling_target#scheduled_scaling_suspended AppautoscalingTarget#scheduled_scaling_suspended}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingTargetSuspendedStateOutputReference <a name="AppautoscalingTargetSuspendedStateOutputReference" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingtarget"

appautoscalingtarget.NewAppautoscalingTargetSuspendedStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppautoscalingTargetSuspendedStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended">ResetDynamicScalingInSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended">ResetDynamicScalingOutSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetScheduledScalingSuspended">ResetScheduledScalingSuspended</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicScalingInSuspended` <a name="ResetDynamicScalingInSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended"></a>

```go
func ResetDynamicScalingInSuspended()
```

##### `ResetDynamicScalingOutSuspended` <a name="ResetDynamicScalingOutSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended"></a>

```go
func ResetDynamicScalingOutSuspended()
```

##### `ResetScheduledScalingSuspended` <a name="ResetScheduledScalingSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetScheduledScalingSuspended"></a>

```go
func ResetScheduledScalingSuspended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput">DynamicScalingInSuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput">DynamicScalingOutSuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput">ScheduledScalingSuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicScalingInSuspendedInput`<sup>Optional</sup> <a name="DynamicScalingInSuspendedInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput"></a>

```go
func DynamicScalingInSuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicScalingOutSuspendedInput`<sup>Optional</sup> <a name="DynamicScalingOutSuspendedInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput"></a>

```go
func DynamicScalingOutSuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledScalingSuspendedInput`<sup>Optional</sup> <a name="ScheduledScalingSuspendedInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput"></a>

```go
func ScheduledScalingSuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicScalingInSuspended`<sup>Required</sup> <a name="DynamicScalingInSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```go
func DynamicScalingInSuspended() interface{}
```

- *Type:* interface{}

---

##### `DynamicScalingOutSuspended`<sup>Required</sup> <a name="DynamicScalingOutSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```go
func DynamicScalingOutSuspended() interface{}
```

- *Type:* interface{}

---

##### `ScheduledScalingSuspended`<sup>Required</sup> <a name="ScheduledScalingSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```go
func ScheduledScalingSuspended() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.internalValue"></a>

```go
func InternalValue() AppautoscalingTargetSuspendedState
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

---



