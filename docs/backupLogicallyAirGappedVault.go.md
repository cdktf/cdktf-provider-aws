# `backupLogicallyAirGappedVault` Submodule <a name="`backupLogicallyAirGappedVault` Submodule" id="@cdktf/provider-aws.backupLogicallyAirGappedVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLogicallyAirGappedVault <a name="BackupLogicallyAirGappedVault" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

backuplogicallyairgappedvault.NewBackupLogicallyAirGappedVault(scope Construct, id *string, config BackupLogicallyAirGappedVaultConfig) BackupLogicallyAirGappedVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig">BackupLogicallyAirGappedVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig">BackupLogicallyAirGappedVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts"></a>

```go
func PutTimeouts(value BackupLogicallyAirGappedVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupLogicallyAirGappedVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

backuplogicallyairgappedvault.BackupLogicallyAirGappedVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

backuplogicallyairgappedvault.BackupLogicallyAirGappedVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

backuplogicallyairgappedvault.BackupLogicallyAirGappedVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

backuplogicallyairgappedvault.BackupLogicallyAirGappedVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupLogicallyAirGappedVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupLogicallyAirGappedVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupLogicallyAirGappedVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupLogicallyAirGappedVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference">BackupLogicallyAirGappedVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDaysInput">MaxRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDaysInput">MinRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDays">MinRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeouts"></a>

```go
func Timeouts() BackupLogicallyAirGappedVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference">BackupLogicallyAirGappedVaultTimeoutsOutputReference</a>

---

##### `MaxRetentionDaysInput`<sup>Optional</sup> <a name="MaxRetentionDaysInput" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDaysInput"></a>

```go
func MaxRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `MinRetentionDaysInput`<sup>Optional</sup> <a name="MinRetentionDaysInput" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDaysInput"></a>

```go
func MinRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDays"></a>

```go
func MaxRetentionDays() *f64
```

- *Type:* *f64

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDays"></a>

```go
func MinRetentionDays() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLogicallyAirGappedVaultConfig <a name="BackupLogicallyAirGappedVaultConfig" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

&backuplogicallyairgappedvault.BackupLogicallyAirGappedVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MaxRetentionDays: *f64,
	MinRetentionDays: *f64,
	Name: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.minRetentionDays">MinRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.maxRetentionDays"></a>

```go
MaxRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}.

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.minRetentionDays"></a>

```go
MinRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.timeouts"></a>

```go
Timeouts BackupLogicallyAirGappedVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#timeouts BackupLogicallyAirGappedVault#timeouts}

---

### BackupLogicallyAirGappedVaultTimeouts <a name="BackupLogicallyAirGappedVaultTimeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

&backuplogicallyairgappedvault.BackupLogicallyAirGappedVaultTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/backup_logically_air_gapped_vault#create BackupLogicallyAirGappedVault#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLogicallyAirGappedVaultTimeoutsOutputReference <a name="BackupLogicallyAirGappedVaultTimeoutsOutputReference" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backuplogicallyairgappedvault"

backuplogicallyairgappedvault.NewBackupLogicallyAirGappedVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupLogicallyAirGappedVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



