# `cloudwatchEventRule` Submodule <a name="`cloudwatchEventRule` Submodule" id="@cdktf/provider-aws.cloudwatchEventRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventRule <a name="CloudwatchEventRule" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule aws_cloudwatch_event_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventrule"

cloudwatcheventrule.NewCloudwatchEventRule(scope Construct, id *string, config CloudwatchEventRuleConfig) CloudwatchEventRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig">CloudwatchEventRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig">CloudwatchEventRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventBusName">ResetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventBusName` <a name="ResetEventBusName" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventBusName"></a>

```go
func ResetEventBusName()
```

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventPattern"></a>

```go
func ResetEventPattern()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchEventRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventrule"

cloudwatcheventrule.CloudwatchEventRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventrule"

cloudwatcheventrule.CloudwatchEventRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventrule"

cloudwatcheventrule.CloudwatchEventRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventrule"

cloudwatcheventrule.CloudwatchEventRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudwatchEventRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchEventRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchEventRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusNameInput">EventBusNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusName">EventBusName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventBusNameInput`<sup>Optional</sup> <a name="EventBusNameInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusNameInput"></a>

```go
func EventBusNameInput() *string
```

- *Type:* *string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventBusName`<sup>Required</sup> <a name="EventBusName" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusName"></a>

```go
func EventBusName() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventRuleConfig <a name="CloudwatchEventRuleConfig" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventrule"

&cloudwatcheventrule.CloudwatchEventRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	EventBusName: *string,
	EventPattern: *string,
	ForceDestroy: interface{},
	Id: *string,
	IsEnabled: interface{},
	Name: *string,
	NamePrefix: *string,
	Region: *string,
	RoleArn: *string,
	ScheduleExpression: *string,
	State: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#description CloudwatchEventRule#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventBusName">EventBusName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#event_bus_name CloudwatchEventRule#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventPattern">EventPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#event_pattern CloudwatchEventRule#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#force_destroy CloudwatchEventRule#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#id CloudwatchEventRule#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#is_enabled CloudwatchEventRule#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#name CloudwatchEventRule#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#name_prefix CloudwatchEventRule#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#role_arn CloudwatchEventRule#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#schedule_expression CloudwatchEventRule#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#state CloudwatchEventRule#state}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#tags CloudwatchEventRule#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#tags_all CloudwatchEventRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#description CloudwatchEventRule#description}.

---

##### `EventBusName`<sup>Optional</sup> <a name="EventBusName" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventBusName"></a>

```go
EventBusName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#event_bus_name CloudwatchEventRule#event_bus_name}.

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#event_pattern CloudwatchEventRule#event_pattern}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#force_destroy CloudwatchEventRule#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#id CloudwatchEventRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#is_enabled CloudwatchEventRule#is_enabled}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#name CloudwatchEventRule#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#name_prefix CloudwatchEventRule#name_prefix}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#region CloudwatchEventRule#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#role_arn CloudwatchEventRule#role_arn}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#schedule_expression CloudwatchEventRule#schedule_expression}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#state CloudwatchEventRule#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#tags CloudwatchEventRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cloudwatch_event_rule#tags_all CloudwatchEventRule#tags_all}.

---



