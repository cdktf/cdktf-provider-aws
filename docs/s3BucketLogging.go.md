# `s3BucketLogging` Submodule <a name="`s3BucketLogging` Submodule" id="@cdktf/provider-aws.s3BucketLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketLoggingA <a name="S3BucketLoggingA" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingA(scope Construct, id *string, config S3BucketLoggingAConfig) S3BucketLoggingA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig">S3BucketLoggingAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig">S3BucketLoggingAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant">PutTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat">PutTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant">ResetTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat">ResetTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetGrant` <a name="PutTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant"></a>

```go
func PutTargetGrant(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetObjectKeyFormat` <a name="PutTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat"></a>

```go
func PutTargetObjectKeyFormat(value S3BucketLoggingTargetObjectKeyFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId"></a>

```go
func ResetId()
```

##### `ResetTargetGrant` <a name="ResetTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant"></a>

```go
func ResetTargetGrant()
```

##### `ResetTargetObjectKeyFormat` <a name="ResetTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat"></a>

```go
func ResetTargetObjectKeyFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.S3BucketLoggingA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.S3BucketLoggingA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.S3BucketLoggingA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.S3BucketLoggingA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3BucketLoggingA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3BucketLoggingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketLoggingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant">TargetGrant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat">TargetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput">TargetBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput">TargetGrantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput">TargetObjectKeyFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput">TargetPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket">TargetBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix">TargetPrefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetGrant`<sup>Required</sup> <a name="TargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant"></a>

```go
func TargetGrant() S3BucketLoggingTargetGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a>

---

##### `TargetObjectKeyFormat`<sup>Required</sup> <a name="TargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat"></a>

```go
func TargetObjectKeyFormat() S3BucketLoggingTargetObjectKeyFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TargetBucketInput`<sup>Optional</sup> <a name="TargetBucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput"></a>

```go
func TargetBucketInput() *string
```

- *Type:* *string

---

##### `TargetGrantInput`<sup>Optional</sup> <a name="TargetGrantInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput"></a>

```go
func TargetGrantInput() interface{}
```

- *Type:* interface{}

---

##### `TargetObjectKeyFormatInput`<sup>Optional</sup> <a name="TargetObjectKeyFormatInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput"></a>

```go
func TargetObjectKeyFormatInput() S3BucketLoggingTargetObjectKeyFormat
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `TargetPrefixInput`<sup>Optional</sup> <a name="TargetPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput"></a>

```go
func TargetPrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket"></a>

```go
func TargetBucket() *string
```

- *Type:* *string

---

##### `TargetPrefix`<sup>Required</sup> <a name="TargetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix"></a>

```go
func TargetPrefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketLoggingAConfig <a name="S3BucketLoggingAConfig" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

&s3bucketlogging.S3BucketLoggingAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	TargetBucket: *string,
	TargetPrefix: *string,
	ExpectedBucketOwner: *string,
	Id: *string,
	TargetGrant: interface{},
	TargetObjectKeyFormat: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket">TargetBucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix">TargetPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant">TargetGrant</a></code> | <code>interface{}</code> | target_grant block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat">TargetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | target_object_key_format block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}.

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket"></a>

```go
TargetBucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}.

---

##### `TargetPrefix`<sup>Required</sup> <a name="TargetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix"></a>

```go
TargetPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetGrant`<sup>Optional</sup> <a name="TargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant"></a>

```go
TargetGrant interface{}
```

- *Type:* interface{}

target_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}

---

##### `TargetObjectKeyFormat`<sup>Optional</sup> <a name="TargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat"></a>

```go
TargetObjectKeyFormat S3BucketLoggingTargetObjectKeyFormat
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

target_object_key_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}

---

### S3BucketLoggingTargetGrant <a name="S3BucketLoggingTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

&s3bucketlogging.S3BucketLoggingTargetGrant {
	Grantee: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}. |

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee"></a>

```go
Grantee S3BucketLoggingTargetGrantGrantee
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#grantee S3BucketLoggingA#grantee}

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}.

---

### S3BucketLoggingTargetGrantGrantee <a name="S3BucketLoggingTargetGrantGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

&s3bucketlogging.S3BucketLoggingTargetGrantGrantee {
	Type: *string,
	EmailAddress: *string,
	Id: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}.

---

### S3BucketLoggingTargetObjectKeyFormat <a name="S3BucketLoggingTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

&s3bucketlogging.S3BucketLoggingTargetObjectKeyFormat {
	PartitionedPrefix: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix,
	SimplePrefix: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix">PartitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | partitioned_prefix block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix">SimplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | simple_prefix block. |

---

##### `PartitionedPrefix`<sup>Optional</sup> <a name="PartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix"></a>

```go
PartitionedPrefix S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

partitioned_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#partitioned_prefix S3BucketLoggingA#partitioned_prefix}

---

##### `SimplePrefix`<sup>Optional</sup> <a name="SimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix"></a>

```go
SimplePrefix S3BucketLoggingTargetObjectKeyFormatSimplePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

simple_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#simple_prefix S3BucketLoggingA#simple_prefix}

---

### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

&s3bucketlogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix {
	PartitionDateSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource">PartitionDateSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}. |

---

##### `PartitionDateSource`<sup>Required</sup> <a name="PartitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource"></a>

```go
PartitionDateSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}.

---

### S3BucketLoggingTargetObjectKeyFormatSimplePrefix <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

&s3bucketlogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix {

}
```


## Classes <a name="Classes" id="Classes"></a>

### S3BucketLoggingTargetGrantGranteeOutputReference <a name="S3BucketLoggingTargetGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingTargetGrantGranteeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketLoggingTargetGrantGranteeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketLoggingTargetGrantGrantee
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


### S3BucketLoggingTargetGrantList <a name="S3BucketLoggingTargetGrantList" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingTargetGrantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3BucketLoggingTargetGrantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get"></a>

```go
func Get(index *f64) S3BucketLoggingTargetGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3BucketLoggingTargetGrantOutputReference <a name="S3BucketLoggingTargetGrantOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingTargetGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3BucketLoggingTargetGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee">PutGrantee</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrantee` <a name="PutGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee"></a>

```go
func PutGrantee(value S3BucketLoggingTargetGrantGrantee)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput">GranteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee"></a>

```go
func Grantee() S3BucketLoggingTargetGrantGranteeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a>

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput"></a>

```go
func GranteeInput() S3BucketLoggingTargetGrantGrantee
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3BucketLoggingTargetObjectKeyFormatOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingTargetObjectKeyFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketLoggingTargetObjectKeyFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix">PutPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix">PutSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix">ResetPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix">ResetSimplePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionedPrefix` <a name="PutPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix"></a>

```go
func PutPartitionedPrefix(value S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `PutSimplePrefix` <a name="PutSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix"></a>

```go
func PutSimplePrefix(value S3BucketLoggingTargetObjectKeyFormatSimplePrefix)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `ResetPartitionedPrefix` <a name="ResetPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix"></a>

```go
func ResetPartitionedPrefix()
```

##### `ResetSimplePrefix` <a name="ResetSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix"></a>

```go
func ResetSimplePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix">PartitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix">SimplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput">PartitionedPrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput">SimplePrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionedPrefix`<sup>Required</sup> <a name="PartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix"></a>

```go
func PartitionedPrefix() S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a>

---

##### `SimplePrefix`<sup>Required</sup> <a name="SimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix"></a>

```go
func SimplePrefix() S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a>

---

##### `PartitionedPrefixInput`<sup>Optional</sup> <a name="PartitionedPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput"></a>

```go
func PartitionedPrefixInput() S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `SimplePrefixInput`<sup>Optional</sup> <a name="SimplePrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput"></a>

```go
func SimplePrefixInput() S3BucketLoggingTargetObjectKeyFormatSimplePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketLoggingTargetObjectKeyFormat
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---


### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput">PartitionDateSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource">PartitionDateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionDateSourceInput`<sup>Optional</sup> <a name="PartitionDateSourceInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput"></a>

```go
func PartitionDateSourceInput() *string
```

- *Type:* *string

---

##### `PartitionDateSource`<sup>Required</sup> <a name="PartitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource"></a>

```go
func PartitionDateSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---


### S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketlogging"

s3bucketlogging.NewS3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketLoggingTargetObjectKeyFormatSimplePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---



