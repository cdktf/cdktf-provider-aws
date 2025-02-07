# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktf/provider-aws.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table aws_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTable(scope Construct, id *string, config DynamodbTableConfig) DynamodbTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex">PutGlobalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putImportTable">PutImportTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex">PutLocalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putOnDemandThroughput">PutOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery">PutPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica">PutReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption">PutServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex">ResetGlobalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey">ResetHashKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetImportTable">ResetImportTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex">ResetLocalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOnDemandThroughput">ResetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey">ResetRangeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity">ResetReadCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica">ResetReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime">ResetRestoreDateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName">ResetRestoreSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceTableArn">ResetRestoreSourceTableArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime">ResetRestoreToLatestTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled">ResetStreamEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType">ResetStreamViewType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass">ResetTableClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity">ResetWriteCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute"></a>

```go
func PutAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGlobalSecondaryIndex` <a name="PutGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex"></a>

```go
func PutGlobalSecondaryIndex(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImportTable` <a name="PutImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putImportTable"></a>

```go
func PutImportTable(value DynamodbTableImportTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putImportTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

---

##### `PutLocalSecondaryIndex` <a name="PutLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex"></a>

```go
func PutLocalSecondaryIndex(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnDemandThroughput` <a name="PutOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putOnDemandThroughput"></a>

```go
func PutOnDemandThroughput(value DynamodbTableOnDemandThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `PutPointInTimeRecovery` <a name="PutPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery"></a>

```go
func PutPointInTimeRecovery(value DynamodbTablePointInTimeRecovery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `PutReplica` <a name="PutReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica"></a>

```go
func PutReplica(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServerSideEncryption` <a name="PutServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption"></a>

```go
func PutServerSideEncryption(value DynamodbTableServerSideEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts"></a>

```go
func PutTimeouts(value DynamodbTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

---

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl"></a>

```go
func PutTtl(value DynamodbTableTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```go
func ResetBillingMode()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetGlobalSecondaryIndex` <a name="ResetGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex"></a>

```go
func ResetGlobalSecondaryIndex()
```

##### `ResetHashKey` <a name="ResetHashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey"></a>

```go
func ResetHashKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId"></a>

```go
func ResetId()
```

##### `ResetImportTable` <a name="ResetImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetImportTable"></a>

```go
func ResetImportTable()
```

##### `ResetLocalSecondaryIndex` <a name="ResetLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex"></a>

```go
func ResetLocalSecondaryIndex()
```

##### `ResetOnDemandThroughput` <a name="ResetOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOnDemandThroughput"></a>

```go
func ResetOnDemandThroughput()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery"></a>

```go
func ResetPointInTimeRecovery()
```

##### `ResetRangeKey` <a name="ResetRangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey"></a>

```go
func ResetRangeKey()
```

##### `ResetReadCapacity` <a name="ResetReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity"></a>

```go
func ResetReadCapacity()
```

##### `ResetReplica` <a name="ResetReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica"></a>

```go
func ResetReplica()
```

##### `ResetRestoreDateTime` <a name="ResetRestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime"></a>

```go
func ResetRestoreDateTime()
```

##### `ResetRestoreSourceName` <a name="ResetRestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName"></a>

```go
func ResetRestoreSourceName()
```

##### `ResetRestoreSourceTableArn` <a name="ResetRestoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceTableArn"></a>

```go
func ResetRestoreSourceTableArn()
```

##### `ResetRestoreToLatestTime` <a name="ResetRestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime"></a>

```go
func ResetRestoreToLatestTime()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption"></a>

```go
func ResetServerSideEncryption()
```

##### `ResetStreamEnabled` <a name="ResetStreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled"></a>

```go
func ResetStreamEnabled()
```

##### `ResetStreamViewType` <a name="ResetStreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType"></a>

```go
func ResetStreamViewType()
```

##### `ResetTableClass` <a name="ResetTableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass"></a>

```go
func ResetTableClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetWriteCapacity` <a name="ResetWriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity"></a>

```go
func ResetWriteCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.DynamodbTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.DynamodbTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.DynamodbTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.DynamodbTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DynamodbTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex">GlobalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTable">ImportTable</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference">DynamodbTableImportTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex">LocalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica">Replica</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption">ServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel">StreamLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput">BillingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput">GlobalSecondaryIndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput">HashKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTableInput">ImportTableInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput">LocalSecondaryIndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughputInput">OnDemandThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput">RangeKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput">ReadCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput">ReplicaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput">RestoreDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput">RestoreSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArnInput">RestoreSourceTableArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput">RestoreToLatestTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput">StreamEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput">StreamViewTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput">TableClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput">WriteCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode">BillingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey">HashKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey">RangeKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity">ReadCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime">RestoreDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName">RestoreSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArn">RestoreSourceTableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime">RestoreToLatestTime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled">StreamEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType">StreamViewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass">TableClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity">WriteCapacity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute"></a>

```go
func Attribute() DynamodbTableAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a>

---

##### `GlobalSecondaryIndex`<sup>Required</sup> <a name="GlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex"></a>

```go
func GlobalSecondaryIndex() DynamodbTableGlobalSecondaryIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a>

---

##### `ImportTable`<sup>Required</sup> <a name="ImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTable"></a>

```go
func ImportTable() DynamodbTableImportTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference">DynamodbTableImportTableOutputReference</a>

---

##### `LocalSecondaryIndex`<sup>Required</sup> <a name="LocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex"></a>

```go
func LocalSecondaryIndex() DynamodbTableLocalSecondaryIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a>

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughput"></a>

```go
func OnDemandThroughput() DynamodbTableOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a>

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery"></a>

```go
func PointInTimeRecovery() DynamodbTablePointInTimeRecoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a>

---

##### `Replica`<sup>Required</sup> <a name="Replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica"></a>

```go
func Replica() DynamodbTableReplicaList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a>

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption"></a>

```go
func ServerSideEncryption() DynamodbTableServerSideEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a>

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `StreamLabel`<sup>Required</sup> <a name="StreamLabel" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel"></a>

```go
func StreamLabel() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts"></a>

```go
func Timeouts() DynamodbTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl"></a>

```go
func Ttl() DynamodbTableTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```go
func BillingModeInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalSecondaryIndexInput`<sup>Optional</sup> <a name="GlobalSecondaryIndexInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput"></a>

```go
func GlobalSecondaryIndexInput() interface{}
```

- *Type:* interface{}

---

##### `HashKeyInput`<sup>Optional</sup> <a name="HashKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput"></a>

```go
func HashKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportTableInput`<sup>Optional</sup> <a name="ImportTableInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTableInput"></a>

```go
func ImportTableInput() DynamodbTableImportTable
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

---

##### `LocalSecondaryIndexInput`<sup>Optional</sup> <a name="LocalSecondaryIndexInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput"></a>

```go
func LocalSecondaryIndexInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnDemandThroughputInput`<sup>Optional</sup> <a name="OnDemandThroughputInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughputInput"></a>

```go
func OnDemandThroughputInput() DynamodbTableOnDemandThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput"></a>

```go
func PointInTimeRecoveryInput() DynamodbTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput"></a>

```go
func RangeKeyInput() *string
```

- *Type:* *string

---

##### `ReadCapacityInput`<sup>Optional</sup> <a name="ReadCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput"></a>

```go
func ReadCapacityInput() *f64
```

- *Type:* *f64

---

##### `ReplicaInput`<sup>Optional</sup> <a name="ReplicaInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput"></a>

```go
func ReplicaInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreDateTimeInput`<sup>Optional</sup> <a name="RestoreDateTimeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput"></a>

```go
func RestoreDateTimeInput() *string
```

- *Type:* *string

---

##### `RestoreSourceNameInput`<sup>Optional</sup> <a name="RestoreSourceNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput"></a>

```go
func RestoreSourceNameInput() *string
```

- *Type:* *string

---

##### `RestoreSourceTableArnInput`<sup>Optional</sup> <a name="RestoreSourceTableArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArnInput"></a>

```go
func RestoreSourceTableArnInput() *string
```

- *Type:* *string

---

##### `RestoreToLatestTimeInput`<sup>Optional</sup> <a name="RestoreToLatestTimeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput"></a>

```go
func RestoreToLatestTimeInput() interface{}
```

- *Type:* interface{}

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput"></a>

```go
func ServerSideEncryptionInput() DynamodbTableServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `StreamEnabledInput`<sup>Optional</sup> <a name="StreamEnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput"></a>

```go
func StreamEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StreamViewTypeInput`<sup>Optional</sup> <a name="StreamViewTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput"></a>

```go
func StreamViewTypeInput() *string
```

- *Type:* *string

---

##### `TableClassInput`<sup>Optional</sup> <a name="TableClassInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```go
func TableClassInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput"></a>

```go
func TtlInput() DynamodbTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `WriteCapacityInput`<sup>Optional</sup> <a name="WriteCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput"></a>

```go
func WriteCapacityInput() *f64
```

- *Type:* *f64

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode"></a>

```go
func BillingMode() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey"></a>

```go
func HashKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey"></a>

```go
func RangeKey() *string
```

- *Type:* *string

---

##### `ReadCapacity`<sup>Required</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity"></a>

```go
func ReadCapacity() *f64
```

- *Type:* *f64

---

##### `RestoreDateTime`<sup>Required</sup> <a name="RestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime"></a>

```go
func RestoreDateTime() *string
```

- *Type:* *string

---

##### `RestoreSourceName`<sup>Required</sup> <a name="RestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName"></a>

```go
func RestoreSourceName() *string
```

- *Type:* *string

---

##### `RestoreSourceTableArn`<sup>Required</sup> <a name="RestoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArn"></a>

```go
func RestoreSourceTableArn() *string
```

- *Type:* *string

---

##### `RestoreToLatestTime`<sup>Required</sup> <a name="RestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime"></a>

```go
func RestoreToLatestTime() interface{}
```

- *Type:* interface{}

---

##### `StreamEnabled`<sup>Required</sup> <a name="StreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled"></a>

```go
func StreamEnabled() interface{}
```

- *Type:* interface{}

---

##### `StreamViewType`<sup>Required</sup> <a name="StreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType"></a>

```go
func StreamViewType() *string
```

- *Type:* *string

---

##### `TableClass`<sup>Required</sup> <a name="TableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass"></a>

```go
func TableClass() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WriteCapacity`<sup>Required</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity"></a>

```go
func WriteCapacity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttribute <a name="DynamodbTableAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableAttribute {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#type DynamodbTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#type DynamodbTable#type}.

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Attribute: interface{},
	BillingMode: *string,
	DeletionProtectionEnabled: interface{},
	GlobalSecondaryIndex: interface{},
	HashKey: *string,
	Id: *string,
	ImportTable: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableImportTable,
	LocalSecondaryIndex: interface{},
	OnDemandThroughput: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableOnDemandThroughput,
	PointInTimeRecovery: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTablePointInTimeRecovery,
	RangeKey: *string,
	ReadCapacity: *f64,
	Replica: interface{},
	RestoreDateTime: *string,
	RestoreSourceName: *string,
	RestoreSourceTableArn: *string,
	RestoreToLatestTime: interface{},
	ServerSideEncryption: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableServerSideEncryption,
	StreamEnabled: interface{},
	StreamViewType: *string,
	TableClass: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableTimeouts,
	Ttl: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableTtl,
	WriteCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute">Attribute</a></code> | <code>interface{}</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode">BillingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex">GlobalSecondaryIndex</a></code> | <code>interface{}</code> | global_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey">HashKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#id DynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.importTable">ImportTable</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | import_table block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex">LocalSecondaryIndex</a></code> | <code>interface{}</code> | local_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | on_demand_throughput block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey">RangeKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity">ReadCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica">Replica</a></code> | <code>interface{}</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime">RestoreDateTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName">RestoreSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceTableArn">RestoreSourceTableArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime">RestoreToLatestTime</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled">StreamEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType">StreamViewType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass">TableClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | ttl block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity">WriteCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute"></a>

```go
Attribute interface{}
```

- *Type:* interface{}

attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#attribute DynamodbTable#attribute}

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```go
BillingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}.

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}.

---

##### `GlobalSecondaryIndex`<sup>Optional</sup> <a name="GlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex"></a>

```go
GlobalSecondaryIndex interface{}
```

- *Type:* interface{}

global_secondary_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}

---

##### `HashKey`<sup>Optional</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey"></a>

```go
HashKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#id DynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportTable`<sup>Optional</sup> <a name="ImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.importTable"></a>

```go
ImportTable DynamodbTableImportTable
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

import_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#import_table DynamodbTable#import_table}

---

##### `LocalSecondaryIndex`<sup>Optional</sup> <a name="LocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex"></a>

```go
LocalSecondaryIndex interface{}
```

- *Type:* interface{}

local_secondary_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}

---

##### `OnDemandThroughput`<sup>Optional</sup> <a name="OnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput"></a>

```go
OnDemandThroughput DynamodbTableOnDemandThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery"></a>

```go
PointInTimeRecovery DynamodbTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}

---

##### `RangeKey`<sup>Optional</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey"></a>

```go
RangeKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `ReadCapacity`<sup>Optional</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity"></a>

```go
ReadCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `Replica`<sup>Optional</sup> <a name="Replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica"></a>

```go
Replica interface{}
```

- *Type:* interface{}

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#replica DynamodbTable#replica}

---

##### `RestoreDateTime`<sup>Optional</sup> <a name="RestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime"></a>

```go
RestoreDateTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}.

---

##### `RestoreSourceName`<sup>Optional</sup> <a name="RestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName"></a>

```go
RestoreSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}.

---

##### `RestoreSourceTableArn`<sup>Optional</sup> <a name="RestoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceTableArn"></a>

```go
RestoreSourceTableArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}.

---

##### `RestoreToLatestTime`<sup>Optional</sup> <a name="RestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime"></a>

```go
RestoreToLatestTime interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption"></a>

```go
ServerSideEncryption DynamodbTableServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}

---

##### `StreamEnabled`<sup>Optional</sup> <a name="StreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled"></a>

```go
StreamEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}.

---

##### `StreamViewType`<sup>Optional</sup> <a name="StreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType"></a>

```go
StreamViewType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}.

---

##### `TableClass`<sup>Optional</sup> <a name="TableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```go
TableClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts"></a>

```go
Timeouts DynamodbTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#timeouts DynamodbTable#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl"></a>

```go
Ttl DynamodbTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#ttl DynamodbTable#ttl}

---

##### `WriteCapacity`<sup>Optional</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity"></a>

```go
WriteCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableGlobalSecondaryIndex <a name="DynamodbTableGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndex {
	HashKey: *string,
	Name: *string,
	ProjectionType: *string,
	NonKeyAttributes: *[]*string,
	OnDemandThroughput: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput,
	RangeKey: *string,
	ReadCapacity: *f64,
	WriteCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey">HashKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType">ProjectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a></code> | on_demand_throughput block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey">RangeKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity">ReadCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity">WriteCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey"></a>

```go
HashKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType"></a>

```go
ProjectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes"></a>

```go
NonKeyAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

##### `OnDemandThroughput`<sup>Optional</sup> <a name="OnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.onDemandThroughput"></a>

```go
OnDemandThroughput DynamodbTableGlobalSecondaryIndexOnDemandThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `RangeKey`<sup>Optional</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey"></a>

```go
RangeKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `ReadCapacity`<sup>Optional</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity"></a>

```go
ReadCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `WriteCapacity`<sup>Optional</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity"></a>

```go
WriteCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableGlobalSecondaryIndexOnDemandThroughput <a name="DynamodbTableGlobalSecondaryIndexOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput {
	MaxReadRequestUnits: *f64,
	MaxWriteRequestUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}. |

---

##### `MaxReadRequestUnits`<sup>Optional</sup> <a name="MaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits"></a>

```go
MaxReadRequestUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}.

---

##### `MaxWriteRequestUnits`<sup>Optional</sup> <a name="MaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits"></a>

```go
MaxWriteRequestUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}.

---

### DynamodbTableImportTable <a name="DynamodbTableImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableImportTable {
	InputFormat: *string,
	S3BucketSource: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableImportTableS3BucketSource,
	InputCompressionType: *string,
	InputFormatOptions: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormat">InputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.s3BucketSource">S3BucketSource</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a></code> | s3_bucket_source block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputCompressionType">InputCompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormatOptions">InputFormatOptions</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a></code> | input_format_options block. |

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormat"></a>

```go
InputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}.

---

##### `S3BucketSource`<sup>Required</sup> <a name="S3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.s3BucketSource"></a>

```go
S3BucketSource DynamodbTableImportTableS3BucketSource
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

s3_bucket_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

##### `InputCompressionType`<sup>Optional</sup> <a name="InputCompressionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputCompressionType"></a>

```go
InputCompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}.

---

##### `InputFormatOptions`<sup>Optional</sup> <a name="InputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormatOptions"></a>

```go
InputFormatOptions DynamodbTableImportTableInputFormatOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

input_format_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

### DynamodbTableImportTableInputFormatOptions <a name="DynamodbTableImportTableInputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableImportTableInputFormatOptions {
	Csv: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a></code> | csv block. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions.property.csv"></a>

```go
Csv DynamodbTableImportTableInputFormatOptionsCsv
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

### DynamodbTableImportTableInputFormatOptionsCsv <a name="DynamodbTableImportTableInputFormatOptionsCsv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableImportTableInputFormatOptionsCsv {
	Delimiter: *string,
	HeaderList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}.

---

##### `HeaderList`<sup>Optional</sup> <a name="HeaderList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.headerList"></a>

```go
HeaderList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}.

---

### DynamodbTableImportTableS3BucketSource <a name="DynamodbTableImportTableS3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableImportTableS3BucketSource {
	Bucket: *string,
	BucketOwner: *string,
	KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#bucket DynamodbTable#bucket}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#bucket_owner DynamodbTable#bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#key_prefix DynamodbTable#key_prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#bucket DynamodbTable#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucketOwner"></a>

```go
BucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#bucket_owner DynamodbTable#bucket_owner}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#key_prefix DynamodbTable#key_prefix}.

---

### DynamodbTableLocalSecondaryIndex <a name="DynamodbTableLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableLocalSecondaryIndex {
	Name: *string,
	ProjectionType: *string,
	RangeKey: *string,
	NonKeyAttributes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType">ProjectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey">RangeKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType"></a>

```go
ProjectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey"></a>

```go
RangeKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes"></a>

```go
NonKeyAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

### DynamodbTableOnDemandThroughput <a name="DynamodbTableOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableOnDemandThroughput {
	MaxReadRequestUnits: *f64,
	MaxWriteRequestUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}. |

---

##### `MaxReadRequestUnits`<sup>Optional</sup> <a name="MaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits"></a>

```go
MaxReadRequestUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}.

---

##### `MaxWriteRequestUnits`<sup>Optional</sup> <a name="MaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits"></a>

```go
MaxWriteRequestUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}.

---

### DynamodbTablePointInTimeRecovery <a name="DynamodbTablePointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTablePointInTimeRecovery {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}.

---

### DynamodbTableReplica <a name="DynamodbTableReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableReplica {
	RegionName: *string,
	KmsKeyArn: *string,
	PointInTimeRecovery: interface{},
	PropagateTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName">RegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#region_name DynamodbTable#region_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags">PropagateTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}. |

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#region_name DynamodbTable#region_name}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery"></a>

```go
PointInTimeRecovery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}.

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags"></a>

```go
PropagateTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}.

---

### DynamodbTableServerSideEncryption <a name="DynamodbTableServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableServerSideEncryption {
	Enabled: interface{},
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

### DynamodbTableTimeouts <a name="DynamodbTableTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#create DynamodbTable#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#delete DynamodbTable#delete}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#update DynamodbTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#create DynamodbTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#delete DynamodbTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#update DynamodbTable#update}.

---

### DynamodbTableTtl <a name="DynamodbTableTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

&dynamodbtable.DynamodbTableTtl {
	AttributeName: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName">AttributeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeList <a name="DynamodbTableAttributeList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get"></a>

```go
func Get(index *f64) DynamodbTableAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableAttributeOutputReference <a name="DynamodbTableAttributeOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexList <a name="DynamodbTableGlobalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableGlobalSecondaryIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get"></a>

```go
func Get(index *f64) DynamodbTableGlobalSecondaryIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits">ResetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">ResetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReadRequestUnits` <a name="ResetMaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```go
func ResetMaxReadRequestUnits()
```

##### `ResetMaxWriteRequestUnits` <a name="ResetMaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```go
func ResetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">MaxReadRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">MaxWriteRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnitsInput`<sup>Optional</sup> <a name="MaxReadRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```go
func MaxReadRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnitsInput`<sup>Optional</sup> <a name="MaxWriteRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```go
func MaxWriteRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableGlobalSecondaryIndexOnDemandThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexOutputReference <a name="DynamodbTableGlobalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableGlobalSecondaryIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.putOnDemandThroughput">PutOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetOnDemandThroughput">ResetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey">ResetRangeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity">ResetReadCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity">ResetWriteCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemandThroughput` <a name="PutOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.putOnDemandThroughput"></a>

```go
func PutOnDemandThroughput(value DynamodbTableGlobalSecondaryIndexOnDemandThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

---

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```go
func ResetNonKeyAttributes()
```

##### `ResetOnDemandThroughput` <a name="ResetOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetOnDemandThroughput"></a>

```go
func ResetOnDemandThroughput()
```

##### `ResetRangeKey` <a name="ResetRangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey"></a>

```go
func ResetRangeKey()
```

##### `ResetReadCapacity` <a name="ResetReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity"></a>

```go
func ResetReadCapacity()
```

##### `ResetWriteCapacity` <a name="ResetWriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity"></a>

```go
func ResetWriteCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput">HashKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughputInput">OnDemandThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput">RangeKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput">ReadCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput">WriteCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey">HashKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey">RangeKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity">ReadCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity">WriteCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughput"></a>

```go
func OnDemandThroughput() DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference</a>

---

##### `HashKeyInput`<sup>Optional</sup> <a name="HashKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput"></a>

```go
func HashKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```go
func NonKeyAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OnDemandThroughputInput`<sup>Optional</sup> <a name="OnDemandThroughputInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughputInput"></a>

```go
func OnDemandThroughputInput() DynamodbTableGlobalSecondaryIndexOnDemandThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```go
func ProjectionTypeInput() *string
```

- *Type:* *string

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```go
func RangeKeyInput() *string
```

- *Type:* *string

---

##### `ReadCapacityInput`<sup>Optional</sup> <a name="ReadCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput"></a>

```go
func ReadCapacityInput() *f64
```

- *Type:* *f64

---

##### `WriteCapacityInput`<sup>Optional</sup> <a name="WriteCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput"></a>

```go
func WriteCapacityInput() *f64
```

- *Type:* *f64

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey"></a>

```go
func HashKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey"></a>

```go
func RangeKey() *string
```

- *Type:* *string

---

##### `ReadCapacity`<sup>Required</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity"></a>

```go
func ReadCapacity() *f64
```

- *Type:* *f64

---

##### `WriteCapacity`<sup>Required</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity"></a>

```go
func WriteCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableImportTableInputFormatOptionsCsvOutputReference <a name="DynamodbTableImportTableInputFormatOptionsCsvOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableImportTableInputFormatOptionsCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportTableInputFormatOptionsCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetHeaderList">ResetHeaderList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetHeaderList` <a name="ResetHeaderList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetHeaderList"></a>

```go
func ResetHeaderList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerListInput">HeaderListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `HeaderListInput`<sup>Optional</sup> <a name="HeaderListInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerListInput"></a>

```go
func HeaderListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `HeaderList`<sup>Required</sup> <a name="HeaderList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerList"></a>

```go
func HeaderList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableImportTableInputFormatOptionsCsv
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

---


### DynamodbTableImportTableInputFormatOptionsOutputReference <a name="DynamodbTableImportTableInputFormatOptionsOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableImportTableInputFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportTableInputFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.putCsv"></a>

```go
func PutCsv(value DynamodbTableImportTableInputFormatOptionsCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resetCsv"></a>

```go
func ResetCsv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference">DynamodbTableImportTableInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csv"></a>

```go
func Csv() DynamodbTableImportTableInputFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference">DynamodbTableImportTableInputFormatOptionsCsvOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csvInput"></a>

```go
func CsvInput() DynamodbTableImportTableInputFormatOptionsCsv
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableImportTableInputFormatOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

---


### DynamodbTableImportTableOutputReference <a name="DynamodbTableImportTableOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableImportTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putInputFormatOptions">PutInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putS3BucketSource">PutS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputCompressionType">ResetInputCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputFormatOptions">ResetInputFormatOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputFormatOptions` <a name="PutInputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putInputFormatOptions"></a>

```go
func PutInputFormatOptions(value DynamodbTableImportTableInputFormatOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putInputFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

---

##### `PutS3BucketSource` <a name="PutS3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putS3BucketSource"></a>

```go
func PutS3BucketSource(value DynamodbTableImportTableS3BucketSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putS3BucketSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

---

##### `ResetInputCompressionType` <a name="ResetInputCompressionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputCompressionType"></a>

```go
func ResetInputCompressionType()
```

##### `ResetInputFormatOptions` <a name="ResetInputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputFormatOptions"></a>

```go
func ResetInputFormatOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptions">InputFormatOptions</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference">DynamodbTableImportTableInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSource">S3BucketSource</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference">DynamodbTableImportTableS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionTypeInput">InputCompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptionsInput">InputFormatOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSourceInput">S3BucketSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionType">InputCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputFormatOptions`<sup>Required</sup> <a name="InputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptions"></a>

```go
func InputFormatOptions() DynamodbTableImportTableInputFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference">DynamodbTableImportTableInputFormatOptionsOutputReference</a>

---

##### `S3BucketSource`<sup>Required</sup> <a name="S3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSource"></a>

```go
func S3BucketSource() DynamodbTableImportTableS3BucketSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference">DynamodbTableImportTableS3BucketSourceOutputReference</a>

---

##### `InputCompressionTypeInput`<sup>Optional</sup> <a name="InputCompressionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionTypeInput"></a>

```go
func InputCompressionTypeInput() *string
```

- *Type:* *string

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatInput"></a>

```go
func InputFormatInput() *string
```

- *Type:* *string

---

##### `InputFormatOptionsInput`<sup>Optional</sup> <a name="InputFormatOptionsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptionsInput"></a>

```go
func InputFormatOptionsInput() DynamodbTableImportTableInputFormatOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

---

##### `S3BucketSourceInput`<sup>Optional</sup> <a name="S3BucketSourceInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSourceInput"></a>

```go
func S3BucketSourceInput() DynamodbTableImportTableS3BucketSource
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

---

##### `InputCompressionType`<sup>Required</sup> <a name="InputCompressionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionType"></a>

```go
func InputCompressionType() *string
```

- *Type:* *string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableImportTable
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

---


### DynamodbTableImportTableS3BucketSourceOutputReference <a name="DynamodbTableImportTableS3BucketSourceOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableImportTableS3BucketSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportTableS3BucketSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetBucketOwner"></a>

```go
func ResetBucketOwner()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetKeyPrefix"></a>

```go
func ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwnerInput"></a>

```go
func BucketOwnerInput() *string
```

- *Type:* *string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableImportTableS3BucketSource
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

---


### DynamodbTableLocalSecondaryIndexList <a name="DynamodbTableLocalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableLocalSecondaryIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get"></a>

```go
func Get(index *f64) DynamodbTableLocalSecondaryIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableLocalSecondaryIndexOutputReference <a name="DynamodbTableLocalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableLocalSecondaryIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```go
func ResetNonKeyAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput">RangeKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey">RangeKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```go
func NonKeyAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```go
func ProjectionTypeInput() *string
```

- *Type:* *string

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```go
func RangeKeyInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey"></a>

```go
func RangeKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableOnDemandThroughputOutputReference <a name="DynamodbTableOnDemandThroughputOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableOnDemandThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableOnDemandThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits">ResetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">ResetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReadRequestUnits` <a name="ResetMaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```go
func ResetMaxReadRequestUnits()
```

##### `ResetMaxWriteRequestUnits` <a name="ResetMaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```go
func ResetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">MaxReadRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">MaxWriteRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnitsInput`<sup>Optional</sup> <a name="MaxReadRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```go
func MaxReadRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnitsInput`<sup>Optional</sup> <a name="MaxWriteRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```go
func MaxWriteRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableOnDemandThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---


### DynamodbTablePointInTimeRecoveryOutputReference <a name="DynamodbTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTablePointInTimeRecoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTablePointInTimeRecoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---


### DynamodbTableReplicaList <a name="DynamodbTableReplicaList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableReplicaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableReplicaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get"></a>

```go
func Get(index *f64) DynamodbTableReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableReplicaOutputReference <a name="DynamodbTableReplicaOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableReplicaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableReplicaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery"></a>

```go
func ResetPointInTimeRecovery()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags"></a>

```go
func ResetPropagateTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel">StreamLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags">PropagateTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `StreamLabel`<sup>Required</sup> <a name="StreamLabel" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel"></a>

```go
func StreamLabel() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput"></a>

```go
func PointInTimeRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput"></a>

```go
func PropagateTagsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery"></a>

```go
func PointInTimeRecovery() interface{}
```

- *Type:* interface{}

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags"></a>

```go
func PropagateTags() interface{}
```

- *Type:* interface{}

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableServerSideEncryptionOutputReference <a name="DynamodbTableServerSideEncryptionOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableServerSideEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableServerSideEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---


### DynamodbTableTimeoutsOutputReference <a name="DynamodbTableTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableTtlOutputReference <a name="DynamodbTableTtlOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtable"

dynamodbtable.NewDynamodbTableTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() DynamodbTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---



