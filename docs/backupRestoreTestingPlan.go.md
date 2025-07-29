# `backupRestoreTestingPlan` Submodule <a name="`backupRestoreTestingPlan` Submodule" id="@cdktf/provider-aws.backupRestoreTestingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingPlan <a name="BackupRestoreTestingPlan" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.NewBackupRestoreTestingPlan(scope Construct, id *string, config BackupRestoreTestingPlanConfig) BackupRestoreTestingPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection">PutRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection">ResetRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours">ResetStartWindowHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecoveryPointSelection` <a name="PutRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection"></a>

```go
func PutRecoveryPointSelection(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecoveryPointSelection` <a name="ResetRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection"></a>

```go
func ResetRecoveryPointSelection()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone"></a>

```go
func ResetScheduleExpressionTimezone()
```

##### `ResetStartWindowHours` <a name="ResetStartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours"></a>

```go
func ResetStartWindowHours()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.BackupRestoreTestingPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.BackupRestoreTestingPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.BackupRestoreTestingPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.BackupRestoreTestingPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupRestoreTestingPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupRestoreTestingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput">RecoveryPointSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput">StartWindowHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours">StartWindowHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection"></a>

```go
func RecoveryPointSelection() BackupRestoreTestingPlanRecoveryPointSelectionList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecoveryPointSelectionInput`<sup>Optional</sup> <a name="RecoveryPointSelectionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput"></a>

```go
func RecoveryPointSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput"></a>

```go
func ScheduleExpressionTimezoneInput() *string
```

- *Type:* *string

---

##### `StartWindowHoursInput`<sup>Optional</sup> <a name="StartWindowHoursInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput"></a>

```go
func StartWindowHoursInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartWindowHours`<sup>Required</sup> <a name="StartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours"></a>

```go
func StartWindowHours() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingPlanConfig <a name="BackupRestoreTestingPlanConfig" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

&backuprestoretestingplan.BackupRestoreTestingPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ScheduleExpression: *string,
	RecoveryPointSelection: interface{},
	Region: *string,
	ScheduleExpressionTimezone: *string,
	StartWindowHours: *f64,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code>interface{}</code> | recovery_point_selection block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours">StartWindowHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}.

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}.

---

##### `RecoveryPointSelection`<sup>Optional</sup> <a name="RecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection"></a>

```go
RecoveryPointSelection interface{}
```

- *Type:* interface{}

recovery_point_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#region BackupRestoreTestingPlan#region}

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone"></a>

```go
ScheduleExpressionTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}.

---

##### `StartWindowHours`<sup>Optional</sup> <a name="StartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours"></a>

```go
StartWindowHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}.

---

### BackupRestoreTestingPlanRecoveryPointSelection <a name="BackupRestoreTestingPlanRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

&backuprestoretestingplan.BackupRestoreTestingPlanRecoveryPointSelection {
	Algorithm: *string,
	IncludeVaults: *[]*string,
	RecoveryPointTypes: *[]*string,
	ExcludeVaults: *[]*string,
	SelectionWindowDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults">IncludeVaults</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults">ExcludeVaults</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}.

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults"></a>

```go
IncludeVaults *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}.

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes"></a>

```go
RecoveryPointTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}.

---

##### `ExcludeVaults`<sup>Optional</sup> <a name="ExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults"></a>

```go
ExcludeVaults *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}.

---

##### `SelectionWindowDays`<sup>Optional</sup> <a name="SelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays"></a>

```go
SelectionWindowDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingPlanRecoveryPointSelectionList <a name="BackupRestoreTestingPlanRecoveryPointSelectionList" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.NewBackupRestoreTestingPlanRecoveryPointSelectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupRestoreTestingPlanRecoveryPointSelectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get"></a>

```go
func Get(index *f64) BackupRestoreTestingPlanRecoveryPointSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupRestoreTestingPlanRecoveryPointSelectionOutputReference <a name="BackupRestoreTestingPlanRecoveryPointSelectionOutputReference" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/backuprestoretestingplan"

backuprestoretestingplan.NewBackupRestoreTestingPlanRecoveryPointSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupRestoreTestingPlanRecoveryPointSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults">ResetExcludeVaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays">ResetSelectionWindowDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeVaults` <a name="ResetExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults"></a>

```go
func ResetExcludeVaults()
```

##### `ResetSelectionWindowDays` <a name="ResetSelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays"></a>

```go
func ResetSelectionWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput">ExcludeVaultsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput">IncludeVaultsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput">RecoveryPointTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput">SelectionWindowDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults">ExcludeVaults</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults">IncludeVaults</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ExcludeVaultsInput`<sup>Optional</sup> <a name="ExcludeVaultsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput"></a>

```go
func ExcludeVaultsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeVaultsInput`<sup>Optional</sup> <a name="IncludeVaultsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput"></a>

```go
func IncludeVaultsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RecoveryPointTypesInput`<sup>Optional</sup> <a name="RecoveryPointTypesInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput"></a>

```go
func RecoveryPointTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelectionWindowDaysInput`<sup>Optional</sup> <a name="SelectionWindowDaysInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput"></a>

```go
func SelectionWindowDaysInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ExcludeVaults`<sup>Required</sup> <a name="ExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults"></a>

```go
func ExcludeVaults() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults"></a>

```go
func IncludeVaults() *[]*string
```

- *Type:* *[]*string

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes"></a>

```go
func RecoveryPointTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SelectionWindowDays`<sup>Required</sup> <a name="SelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays"></a>

```go
func SelectionWindowDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



