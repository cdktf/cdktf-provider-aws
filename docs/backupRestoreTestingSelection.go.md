# `backupRestoreTestingSelection` Submodule <a name="`backupRestoreTestingSelection` Submodule" id="@cdktf/provider-aws.backupRestoreTestingSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingSelection <a name="BackupRestoreTestingSelection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelection(scope Construct, id *string, config BackupRestoreTestingSelectionConfig) BackupRestoreTestingSelection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig">BackupRestoreTestingSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig">BackupRestoreTestingSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions">PutProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns">ResetProtectedResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions">ResetProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides">ResetRestoreMetadataOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours">ResetValidationWindowHours</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProtectedResourceConditions` <a name="PutProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions"></a>

```go
func PutProtectedResourceConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProtectedResourceArns` <a name="ResetProtectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns"></a>

```go
func ResetProtectedResourceArns()
```

##### `ResetProtectedResourceConditions` <a name="ResetProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions"></a>

```go
func ResetProtectedResourceConditions()
```

##### `ResetRestoreMetadataOverrides` <a name="ResetRestoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides"></a>

```go
func ResetRestoreMetadataOverrides()
```

##### `ResetValidationWindowHours` <a name="ResetValidationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours"></a>

```go
func ResetValidationWindowHours()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.BackupRestoreTestingSelection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.BackupRestoreTestingSelection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.BackupRestoreTestingSelection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.BackupRestoreTestingSelection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupRestoreTestingSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupRestoreTestingSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions">ProtectedResourceConditions</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList">BackupRestoreTestingSelectionProtectedResourceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput">ProtectedResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput">ProtectedResourceConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput">ProtectedResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput">RestoreMetadataOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput">RestoreTestingPlanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput">ValidationWindowHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns">ProtectedResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType">ProtectedResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides">RestoreMetadataOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName">RestoreTestingPlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours">ValidationWindowHours</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtectedResourceConditions`<sup>Required</sup> <a name="ProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions"></a>

```go
func ProtectedResourceConditions() BackupRestoreTestingSelectionProtectedResourceConditionsList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList">BackupRestoreTestingSelectionProtectedResourceConditionsList</a>

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectedResourceArnsInput`<sup>Optional</sup> <a name="ProtectedResourceArnsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput"></a>

```go
func ProtectedResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtectedResourceConditionsInput`<sup>Optional</sup> <a name="ProtectedResourceConditionsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput"></a>

```go
func ProtectedResourceConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectedResourceTypeInput`<sup>Optional</sup> <a name="ProtectedResourceTypeInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput"></a>

```go
func ProtectedResourceTypeInput() *string
```

- *Type:* *string

---

##### `RestoreMetadataOverridesInput`<sup>Optional</sup> <a name="RestoreMetadataOverridesInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput"></a>

```go
func RestoreMetadataOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RestoreTestingPlanNameInput`<sup>Optional</sup> <a name="RestoreTestingPlanNameInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput"></a>

```go
func RestoreTestingPlanNameInput() *string
```

- *Type:* *string

---

##### `ValidationWindowHoursInput`<sup>Optional</sup> <a name="ValidationWindowHoursInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput"></a>

```go
func ValidationWindowHoursInput() *f64
```

- *Type:* *f64

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectedResourceArns`<sup>Required</sup> <a name="ProtectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns"></a>

```go
func ProtectedResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ProtectedResourceType`<sup>Required</sup> <a name="ProtectedResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType"></a>

```go
func ProtectedResourceType() *string
```

- *Type:* *string

---

##### `RestoreMetadataOverrides`<sup>Required</sup> <a name="RestoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides"></a>

```go
func RestoreMetadataOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RestoreTestingPlanName`<sup>Required</sup> <a name="RestoreTestingPlanName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName"></a>

```go
func RestoreTestingPlanName() *string
```

- *Type:* *string

---

##### `ValidationWindowHours`<sup>Required</sup> <a name="ValidationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours"></a>

```go
func ValidationWindowHours() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingSelectionConfig <a name="BackupRestoreTestingSelectionConfig" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

&backuprestoretestingselection.BackupRestoreTestingSelectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IamRoleArn: *string,
	Name: *string,
	ProtectedResourceType: *string,
	RestoreTestingPlanName: *string,
	ProtectedResourceArns: *[]*string,
	ProtectedResourceConditions: interface{},
	RestoreMetadataOverrides: *map[string]*string,
	ValidationWindowHours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType">ProtectedResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName">RestoreTestingPlanName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns">ProtectedResourceArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions">ProtectedResourceConditions</a></code> | <code>interface{}</code> | protected_resource_conditions block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides">RestoreMetadataOverrides</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours">ValidationWindowHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}.

---

##### `ProtectedResourceType`<sup>Required</sup> <a name="ProtectedResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType"></a>

```go
ProtectedResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}.

---

##### `RestoreTestingPlanName`<sup>Required</sup> <a name="RestoreTestingPlanName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName"></a>

```go
RestoreTestingPlanName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}.

---

##### `ProtectedResourceArns`<sup>Optional</sup> <a name="ProtectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns"></a>

```go
ProtectedResourceArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}.

---

##### `ProtectedResourceConditions`<sup>Optional</sup> <a name="ProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions"></a>

```go
ProtectedResourceConditions interface{}
```

- *Type:* interface{}

protected_resource_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}

---

##### `RestoreMetadataOverrides`<sup>Optional</sup> <a name="RestoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides"></a>

```go
RestoreMetadataOverrides *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}.

---

##### `ValidationWindowHours`<sup>Optional</sup> <a name="ValidationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours"></a>

```go
ValidationWindowHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}.

---

### BackupRestoreTestingSelectionProtectedResourceConditions <a name="BackupRestoreTestingSelectionProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

&backuprestoretestingselection.BackupRestoreTestingSelectionProtectedResourceConditions {
	StringEquals: interface{},
	StringNotEquals: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals">StringEquals</a></code> | <code>interface{}</code> | string_equals block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals">StringNotEquals</a></code> | <code>interface{}</code> | string_not_equals block. |

---

##### `StringEquals`<sup>Optional</sup> <a name="StringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals"></a>

```go
StringEquals interface{}
```

- *Type:* interface{}

string_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}

---

##### `StringNotEquals`<sup>Optional</sup> <a name="StringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals"></a>

```go
StringNotEquals interface{}
```

- *Type:* interface{}

string_not_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

&backuprestoretestingselection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

&backuprestoretestingselection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingSelectionProtectedResourceConditionsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelectionProtectedResourceConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupRestoreTestingSelectionProtectedResourceConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get"></a>

```go
func Get(index *f64) BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals">PutStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals">PutStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals">ResetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals">ResetStringNotEquals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStringEquals` <a name="PutStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals"></a>

```go
func PutStringEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotEquals` <a name="PutStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals"></a>

```go
func PutStringNotEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStringEquals` <a name="ResetStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals"></a>

```go
func ResetStringEquals()
```

##### `ResetStringNotEquals` <a name="ResetStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals"></a>

```go
func ResetStringNotEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals">StringEquals</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals">StringNotEquals</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput">StringEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput">StringNotEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StringEquals`<sup>Required</sup> <a name="StringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals"></a>

```go
func StringEquals() BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a>

---

##### `StringNotEquals`<sup>Required</sup> <a name="StringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals"></a>

```go
func StringNotEquals() BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a>

---

##### `StringEqualsInput`<sup>Optional</sup> <a name="StringEqualsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput"></a>

```go
func StringEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotEqualsInput`<sup>Optional</sup> <a name="StringNotEqualsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput"></a>

```go
func StringNotEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get"></a>

```go
func Get(index *f64) BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get"></a>

```go
func Get(index *f64) BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuprestoretestingselection"

backuprestoretestingselection.NewBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



