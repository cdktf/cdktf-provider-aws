# `dbSnapshotCopy` Submodule <a name="`dbSnapshotCopy` Submodule" id="@cdktf/provider-aws.dbSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbSnapshotCopy <a name="DbSnapshotCopy" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy aws_db_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

dbsnapshotcopy.NewDbSnapshotCopy(scope Construct, id *string, config DbSnapshotCopyConfig) DbSnapshotCopy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig">DbSnapshotCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig">DbSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetDestinationRegion">ResetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOptionGroupName">ResetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetPresignedUrl">ResetPresignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetSharedAccounts">ResetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTargetCustomAvailabilityZone">ResetTargetCustomAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts"></a>

```go
func PutTimeouts(value DbSnapshotCopyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

---

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetCopyTags"></a>

```go
func ResetCopyTags()
```

##### `ResetDestinationRegion` <a name="ResetDestinationRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetDestinationRegion"></a>

```go
func ResetDestinationRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetOptionGroupName` <a name="ResetOptionGroupName" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOptionGroupName"></a>

```go
func ResetOptionGroupName()
```

##### `ResetPresignedUrl` <a name="ResetPresignedUrl" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetPresignedUrl"></a>

```go
func ResetPresignedUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSharedAccounts` <a name="ResetSharedAccounts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetSharedAccounts"></a>

```go
func ResetSharedAccounts()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTargetCustomAvailabilityZone` <a name="ResetTargetCustomAvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTargetCustomAvailabilityZone"></a>

```go
func ResetTargetCustomAvailabilityZone()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DbSnapshotCopy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

dbsnapshotcopy.DbSnapshotCopy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

dbsnapshotcopy.DbSnapshotCopy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

dbsnapshotcopy.DbSnapshotCopy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

dbsnapshotcopy.DbSnapshotCopy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DbSnapshotCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DbSnapshotCopy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DbSnapshotCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DbSnapshotCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dbSnapshotArn">DbSnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.encrypted">Encrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference">DbSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTagsInput">CopyTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupNameInput">OptionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrlInput">PresignedUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccountsInput">SharedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifierInput">SourceDbSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZoneInput">TargetCustomAvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifierInput">TargetDbSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTags">CopyTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupName">OptionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrl">PresignedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccounts">SharedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZone">TargetCustomAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifier">TargetDbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `DbSnapshotArn`<sup>Required</sup> <a name="DbSnapshotArn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dbSnapshotArn"></a>

```go
func DbSnapshotArn() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.snapshotType"></a>

```go
func SnapshotType() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeouts"></a>

```go
func Timeouts() DbSnapshotCopyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference">DbSnapshotCopyTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTagsInput"></a>

```go
func CopyTagsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegionInput"></a>

```go
func DestinationRegionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `OptionGroupNameInput`<sup>Optional</sup> <a name="OptionGroupNameInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupNameInput"></a>

```go
func OptionGroupNameInput() *string
```

- *Type:* *string

---

##### `PresignedUrlInput`<sup>Optional</sup> <a name="PresignedUrlInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrlInput"></a>

```go
func PresignedUrlInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SharedAccountsInput`<sup>Optional</sup> <a name="SharedAccountsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccountsInput"></a>

```go
func SharedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDbSnapshotIdentifierInput`<sup>Optional</sup> <a name="SourceDbSnapshotIdentifierInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifierInput"></a>

```go
func SourceDbSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetCustomAvailabilityZoneInput`<sup>Optional</sup> <a name="TargetCustomAvailabilityZoneInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZoneInput"></a>

```go
func TargetCustomAvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `TargetDbSnapshotIdentifierInput`<sup>Optional</sup> <a name="TargetDbSnapshotIdentifierInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifierInput"></a>

```go
func TargetDbSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTags"></a>

```go
func CopyTags() interface{}
```

- *Type:* interface{}

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegion"></a>

```go
func DestinationRegion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupName"></a>

```go
func OptionGroupName() *string
```

- *Type:* *string

---

##### `PresignedUrl`<sup>Required</sup> <a name="PresignedUrl" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrl"></a>

```go
func PresignedUrl() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SharedAccounts`<sup>Required</sup> <a name="SharedAccounts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccounts"></a>

```go
func SharedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifier"></a>

```go
func SourceDbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetCustomAvailabilityZone`<sup>Required</sup> <a name="TargetCustomAvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZone"></a>

```go
func TargetCustomAvailabilityZone() *string
```

- *Type:* *string

---

##### `TargetDbSnapshotIdentifier`<sup>Required</sup> <a name="TargetDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifier"></a>

```go
func TargetDbSnapshotIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DbSnapshotCopyConfig <a name="DbSnapshotCopyConfig" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

&dbsnapshotcopy.DbSnapshotCopyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SourceDbSnapshotIdentifier: *string,
	TargetDbSnapshotIdentifier: *string,
	CopyTags: interface{},
	DestinationRegion: *string,
	Id: *string,
	KmsKeyId: *string,
	OptionGroupName: *string,
	PresignedUrl: *string,
	Region: *string,
	SharedAccounts: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TargetCustomAvailabilityZone: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dbSnapshotCopy.DbSnapshotCopyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetDbSnapshotIdentifier">TargetDbSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.copyTags">CopyTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#id DbSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.optionGroupName">OptionGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.presignedUrl">PresignedUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sharedAccounts">SharedAccounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#shared_accounts DbSnapshotCopy#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#tags DbSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetCustomAvailabilityZone">TargetCustomAvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sourceDbSnapshotIdentifier"></a>

```go
SourceDbSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}.

---

##### `TargetDbSnapshotIdentifier`<sup>Required</sup> <a name="TargetDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetDbSnapshotIdentifier"></a>

```go
TargetDbSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}.

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.copyTags"></a>

```go
CopyTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}.

---

##### `DestinationRegion`<sup>Optional</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.destinationRegion"></a>

```go
DestinationRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#id DbSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}.

---

##### `OptionGroupName`<sup>Optional</sup> <a name="OptionGroupName" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.optionGroupName"></a>

```go
OptionGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}.

---

##### `PresignedUrl`<sup>Optional</sup> <a name="PresignedUrl" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.presignedUrl"></a>

```go
PresignedUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#region DbSnapshotCopy#region}

---

##### `SharedAccounts`<sup>Optional</sup> <a name="SharedAccounts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sharedAccounts"></a>

```go
SharedAccounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#shared_accounts DbSnapshotCopy#shared_accounts}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#tags DbSnapshotCopy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}.

---

##### `TargetCustomAvailabilityZone`<sup>Optional</sup> <a name="TargetCustomAvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetCustomAvailabilityZone"></a>

```go
TargetCustomAvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.timeouts"></a>

```go
Timeouts DbSnapshotCopyTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#timeouts DbSnapshotCopy#timeouts}

---

### DbSnapshotCopyTimeouts <a name="DbSnapshotCopyTimeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

&dbsnapshotcopy.DbSnapshotCopyTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#create DbSnapshotCopy#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_snapshot_copy#create DbSnapshotCopy#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbSnapshotCopyTimeoutsOutputReference <a name="DbSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dbsnapshotcopy"

dbsnapshotcopy.NewDbSnapshotCopyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DbSnapshotCopyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



